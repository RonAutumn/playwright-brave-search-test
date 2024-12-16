const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('Opening Brave Search...');
  await page.goto('https://search.brave.com');
  
  await page.fill('input[name="q"]', 'How to use Playwright with GitHub');
  await page.press('input[name="q"]', 'Enter');
  console.log('Search complete...');
  
  // Wait for search results to load
  await page.waitForTimeout(3000);
  
  // Click the first search result
  await page.click('a[href^="https://"]');
  console.log('Navigated to first search result...');
  
  // Take a screenshot
  await page.screenshot({ path: 'brave-search-result.png' });
  console.log('Screenshot saved as brave-search-result.png');
  
  await browser.close();
})();