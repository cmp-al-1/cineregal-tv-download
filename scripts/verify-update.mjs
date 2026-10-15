import fs from 'node:fs';
import crypto from 'node:crypto';
const expected = JSON.parse(fs.readFileSync('docs/updates/latest.json'));
for (const root of ['https://cmp-al-1.github.io/cineregal-tv-download/', 'https://raw.githubusercontent.com/cmp-al-1/cineregal-tv-download/main/docs/']) {
  let failure;
  for (let attempt=0; attempt<6; attempt++) {
    try {
      const meta = await fetch(root + 'updates/latest.json?check=' + Date.now(), { signal:AbortSignal.timeout(20000) });
      if (!meta.ok) throw Error('Metadata HTTP ' + meta.status);
      const actual = await meta.json();
      if (JSON.stringify(actual) !== JSON.stringify(expected)) throw Error('Metadata not deployed yet');
      const response = await fetch(root + expected.path, { redirect:'error', signal:AbortSignal.timeout(30000) });
      if (!response.ok) throw Error('APK HTTP ' + response.status);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length !== expected.size || crypto.createHash('sha256').update(bytes).digest('hex') !== expected.sha256) throw Error('APK integrity mismatch');
      console.log(`PASS anonymous direct HTTPS ${new URL(root).host}: ${expected.version}, ${bytes.length} bytes, SHA-256 verified`);
      failure = null; break;
    } catch (error) { failure = error; if (attempt < 5) await new Promise(r => setTimeout(r, 10000)); }
  }
  if (failure) throw failure;
}
