const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport:{width:1440,height:1000} });
  await p.goto('http://localhost:8765/index.html',{waitUntil:'networkidle'}); await p.waitForTimeout(2000);
  const bad = await p.evaluate(() => {
    const out = [];
    document.querySelectorAll('i[class*="fa-"]').forEach(el => {
      const cs = getComputedStyle(el, '::before');
      const c = cs.content;
      const w = el.getBoundingClientRect().width;
      // a missing glyph resolves to content 'none'/'""' or zero width
      if (!c || c === 'none' || c === '""' || c === 'normal') {
        out.push({ cls: el.className, reason: 'no ::before content', w: Math.round(w) });
      }
    });
    return out;
  });
  const uniq = [...new Set(bad.map(x=>x.cls))];
  console.log('ICONS NOT RENDERING (' + uniq.length + ' unique):');
  uniq.forEach(c => console.log('   ', c));
  await b.close();
})();
