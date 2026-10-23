import { createRequire } from 'node:module';
const require = createRequire('D:/卫戍协议/卫戍协议罗德岛卡兹戴尔盟约mod/mod管理器/package.json');
const puppeteer = require('puppeteer-core');
const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', headless: 'new', args: ['--no-sandbox', '--disable-gpu', '--window-size=1600,900'] });
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1 });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
try {
  await page.goto('http://127.0.0.1:3050/', { waitUntil: 'networkidle2', timeout: 60000 });
  await page.evaluate(() => { localStorage.removeItem('sp.annihilation.backgrounds'); localStorage.removeItem('sp.annihilation.presetsOnly'); });
  await page.reload({ waitUntil: 'networkidle2' });
  await page.waitForSelector('input', { timeout: 20000 });
  await page.type('input', 'keepbg');
  await page.keyboard.press('Enter');
  await page.waitForFunction((x) => document.body.innerText.includes(x), { timeout: 60000 }, '\u6d4b\u8bd5\u6a21\u62df');
  await page.click('.hub-entry--blood');
  await page.waitForSelector('.proto-stage__art-add', { timeout: 15000 });
  const openManager = () => page.evaluate(() => { const b = [...document.querySelectorAll('.proto-stage__art-add')].find((x) => (x.textContent || '').includes('管理')); b?.click(); });
  await openManager();
  await page.waitForSelector('.proto-stage__art-manager', { timeout: 5000 });
  console.log('before', await page.evaluate(() => ({ dots: document.querySelectorAll('.proto-stage__art-dot').length, only: localStorage.getItem('sp.annihilation.presetsOnly') })));
  await page.click('.proto-stage__art-manager-keep');
  await new Promise((r) => setTimeout(r, 400));
  console.log('after keep', await page.evaluate(() => ({
    dots: document.querySelectorAll('.proto-stage__art-dot').length,
    only: localStorage.getItem('sp.annihilation.presetsOnly'),
    manager: !!document.querySelector('.proto-stage__art-manager'),
    src: document.querySelector('.proto-stage__art-slide.is-on img')?.getAttribute('src'),
  })));
  await page.reload({ waitUntil: 'networkidle2' });
  await page.waitForSelector('input', { timeout: 20000 });
  await page.type('input', 'keepbg');
  await page.keyboard.press('Enter');
  await page.waitForFunction((x) => document.body.innerText.includes(x), { timeout: 60000 }, '\u6d4b\u8bd5\u6a21\u62df');
  await page.click('.hub-entry--blood');
  await page.waitForSelector('.proto-stage__art-add', { timeout: 15000 });
  console.log('after reload', await page.evaluate(() => ({ dots: document.querySelectorAll('.proto-stage__art-dot').length, only: localStorage.getItem('sp.annihilation.presetsOnly') })));
  await openManager();
  await page.waitForSelector('.proto-stage__art-manager', { timeout: 5000 });
  await page.click('.proto-stage__art-manager-restore');
  await new Promise((r) => setTimeout(r, 300));
  console.log('after restore', await page.evaluate(() => ({ dots: document.querySelectorAll('.proto-stage__art-dot').length, only: localStorage.getItem('sp.annihilation.presetsOnly') })));
  console.log('errors', errors.slice(0, 5));
} catch (e) { console.error('FAIL', e); await page.screenshot({ path: 'D:\\arkunpack_work\\background-keep-fail.png' }); process.exitCode = 1; }
finally { await browser.close(); }
