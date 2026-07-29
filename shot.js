const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  // DESKTOP full page
  let p = await b.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const errs = [];
  p.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
  p.on('pageerror', e => errs.push('PAGEERROR: '+e.message));
  await p.goto('file:///home/claude/fkfa/index.html', { waitUntil: 'networkidle' });
  await p.waitForTimeout(2500);
  const h = await p.evaluate(() => document.body.scrollHeight);
  console.log('desktop page height:', h);
  // sectioned desktop shots
  let y=0, i=0;
  while (y < h && i < 14) {
    await p.evaluate(v => window.scrollTo(0, v), y);
    await p.waitForTimeout(500);
    await p.screenshot({ path: `shots/d${String(i).padStart(2,'0')}.png` });
    y += 940; i++;
  }
  // MOBILE 390
  let m = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await m.goto('file:///home/claude/fkfa/index.html', { waitUntil: 'networkidle' });
  await m.waitForTimeout(2500);
  const mh = await m.evaluate(() => document.body.scrollHeight);
  console.log('mobile page height:', mh, ' => approx swipes:', Math.round(mh/844));
  let my=0, j=0;
  while (my < mh && j < 22) {
    await m.evaluate(v => window.scrollTo(0, v), my);
    await m.waitForTimeout(420);
    await m.screenshot({ path: `shots/m${String(j).padStart(2,'0')}.png` });
    my += 800; j++;
  }
  // drawer open
  await m.evaluate(() => window.scrollTo(0,0)); await m.waitForTimeout(300);
  await m.click('#hamburger'); await m.waitForTimeout(700);
  await m.screenshot({ path: 'shots/m-drawer.png' });
  // horizontal overflow check
  const ov = await m.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
  console.log('mobile overflow:', JSON.stringify(ov), ov.sw > ov.cw ? 'OVERFLOW!' : 'ok');
  console.log('CONSOLE ERRORS:', errs.length ? errs : 'none');
  await b.close();
})();
