const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport:{width:1440,height:1000} });
  await p.goto('http://localhost:8765/index.html',{waitUntil:'networkidle'}); await p.waitForTimeout(1500);
  // report computed font-size of every element carrying a "display type" class
  const sel = ['.ladder-quote','.sol-pull','.mech h2','.fleet-yr','.feat-body h3','.qcard blockquote','.band-toggle','.wb-sub','.door h3','.tour h3','.cred-cell .ct','.outcomes .oage','.acc-head','.hero h1'];
  const out = await p.evaluate(list => list.map(s => {
    const e = document.querySelector(s);
    if(!e) return {s, missing:true};
    const cs = getComputedStyle(e);
    return { s, px: Math.round(parseFloat(cs.fontSize)), fam: cs.fontFamily.split(',')[0].replace(/"/g,'') };
  }), sel);
  out.forEach(o => console.log(o.missing ? `  MISSING ${o.s}` : `  ${String(o.px).padStart(3)}px  ${o.fam.padEnd(16)} ${o.s}`));
  await b.close();
})();
