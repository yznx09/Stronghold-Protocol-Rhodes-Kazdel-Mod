import { createRequire } from 'node:module';
const require = createRequire('D:/卫戍协议/卫戍协议罗德岛卡兹戴尔盟约mod/mod管理器/package.json');
const puppeteer = require('puppeteer-core');
const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', headless: 'new', args: ['--no-sandbox', '--disable-gpu', '--window-size=1915,880'] });
const page = await browser.newPage();
await page.setViewport({ width: 1915, height: 880, deviceScaleFactor: 1 });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
try {
  await page.goto('http://127.0.0.1:3036/', { waitUntil: 'networkidle2', timeout: 60000 });
  await page.waitForSelector('input', { timeout: 20000 });
  await page.type('input', 'repro');
  await page.keyboard.press('Enter');
  await page.waitForFunction((x) => document.body.innerText.includes(x), { timeout: 60000 }, '\u6d4b\u8bd5\u6a21\u62df');
  await page.evaluate(() => {
    const el = [...document.querySelectorAll('.hub-entry')].find((e) => e.textContent.includes('独立模拟'));
    el?.click();
  });
  await page.waitForSelector('.proto-list .pcard', { timeout: 15000 });
  await page.evaluate(() => { const e = document.querySelector('.proto-list'); e.scrollTop = e.scrollHeight; });
  await new Promise((r) => setTimeout(r, 400));
  await page.click('.proto-list .pcard:last-child');
  await new Promise((r) => setTimeout(r, 1800));
  const info = await page.evaluate(() => ({
    body: document.body.className,
    proto: document.querySelectorAll('.proto').length,
    protoDiff: document.querySelector('.proto')?.getAttribute('data-difficulty'),
    protoTitle: document.querySelector('.proto-title h2')?.textContent,
    screens: [...document.querySelectorAll('.screen')].map((e) => e.className),
    text: document.body.innerText.slice(0, 120).replace(/\n/g, ' | '),
  }));
  console.log(info);
  await page.screenshot({ path: 'D:\\arkunpack_work\\solo-annih-click-result.png' });
  console.log('errors', errors.slice(0, 5));
} catch (e) { console.error('FAIL', e); process.exitCode = 1; }
finally { await browser.close(); }
