const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const m = await b.newPage({ viewport:{width:390,height:844}, deviceScaleFactor:2, isMobile:true, hasTouch:true });
  await m.goto('file:///home/claude/fkfa/index.html', { waitUntil:'networkidle' });
  await m.waitForTimeout(2000);
  // band accordion: check first open, others closed
  const st = await m.evaluate(() => Array.from(document.querySelectorAll('.bands .band')).map(b => ({
    open: b.classList.contains('open'),
    mh: b.querySelector('.band-collapse').style.maxHeight,
    h: Math.round(b.getBoundingClientRect().height)
  })));
  console.log('band states:', JSON.stringify(st));
  // open band 3
  await m.locator('.bands .band').nth(2).scrollIntoViewIfNeeded();
  await m.waitForTimeout(400);
  await m.locator('.bands .band').nth(2).locator('.band-toggle').click();
  await m.waitForTimeout(700);
  await m.screenshot({ path:'shots/x-band-open.png' });
  const st2 = await m.evaluate(() => Array.from(document.querySelectorAll('.bands .band')).map(b => b.classList.contains('open')));
  console.log('after click band[2]:', JSON.stringify(st2));
  // FAQ accordion
  await m.locator('.acc-head').first().scrollIntoViewIfNeeded(); await m.waitForTimeout(300);
  await m.locator('.acc-head').first().click(); await m.waitForTimeout(700);
  await m.screenshot({ path:'shots/x-faq.png' });
  // form validation
  await m.locator('#flightForm button[type=submit]').scrollIntoViewIfNeeded(); await m.waitForTimeout(300);
  await m.locator('#flightForm button[type=submit]').click(); await m.waitForTimeout(500);
  await m.screenshot({ path:'shots/x-form.png' });
  // anchor test: does #fleet land below the nav?
  await m.evaluate(()=>window.scrollTo(0,0)); await m.waitForTimeout(300);
  await m.evaluate(()=>{document.querySelector('a[href="#fleet"]').click();});
  await m.waitForTimeout(1400);
  const anch = await m.evaluate(()=>{const r=document.getElementById('fleet').getBoundingClientRect();return {top:Math.round(r.top), navH:Math.round(document.getElementById('siteNav').getBoundingClientRect().height), hash:location.hash};});
  console.log('anchor #fleet:', JSON.stringify(anch), anch.top >= anch.navH ? 'CLEAR of nav' : 'UNDER NAV!');
  await b.close();
})();
