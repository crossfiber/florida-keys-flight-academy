const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const URL='http://localhost:8765/index.html';
  const errs=[];
  let p = await b.newPage({ viewport:{width:1440,height:1000} });
  p.on('pageerror', e=>errs.push('PAGEERROR: '+e.message));
  await p.goto(URL,{waitUntil:'networkidle'}); await p.waitForTimeout(2500);
  const info = await p.evaluate(()=>({
    h1: getComputedStyle(document.querySelector('h1')).fontFamily,
    body: getComputedStyle(document.body).fontFamily,
    mono: getComputedStyle(document.querySelector('.rrow .rn')).fontFamily,
    iconW: Math.round(document.querySelector('.acc-head i').getBoundingClientRect().width),
    navBg: getComputedStyle(document.getElementById('siteNav')).backgroundColor
  }));
  console.log('COMPUTED:', JSON.stringify(info));
  for (const [n,y] of [['live-hero',0],['live-doors',2350],['live-fleet',3500],['live-warbird',10450],['live-proof',12250]]) {
    await p.evaluate(v=>window.scrollTo(0,v), y); await p.waitForTimeout(800);
    await p.screenshot({path:`shots/${n}.png`});
  }
  let m = await b.newPage({ viewport:{width:390,height:844}, deviceScaleFactor:2, isMobile:true, hasTouch:true });
  await m.goto(URL,{waitUntil:'networkidle'}); await m.waitForTimeout(2000);
  await m.screenshot({path:'shots/live-m-hero.png'});
  await m.click('#hamburger'); await m.waitForTimeout(800);
  await m.screenshot({path:'shots/live-m-drawer.png'});
  await m.click('#drawerClose'); await m.waitForTimeout(600);
  await m.evaluate(()=>document.getElementById('training').scrollIntoView()); await m.waitForTimeout(700);
  await m.screenshot({path:'shots/live-m-ladder.png'});
  console.log('ERRORS:', errs.length?errs:'none');
  await b.close();
})();
