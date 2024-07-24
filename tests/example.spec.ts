import { test, expect, chromium } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// test('record video', async ({ page }) => {
//   const browser = await chromium.launch();
//   // const page = await context.newPage();
//   const context = await browser.newContext({
//     recordVideo: { dir: '../videos/' }
//   });

//   await page.waitForTimeout(5000); // Record for 5 seconds
//   await browser.close();
// });

test('record video', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: { dir: '../videos/' }
  });

  const page = await context.newPage();

  await page.goto('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  await page.waitForTimeout(5000); // Record for 5 seconds
  await browser.close();
});


test('record video2', async ({ page }) => {
  await page.goto('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  await page.waitForTimeout(5000); // Record for 5 seconds
  // await browser.close();
  // Expect a title "to contain" a substring.
});