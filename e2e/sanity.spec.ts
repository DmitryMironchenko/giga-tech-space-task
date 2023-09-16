import { expect, Page, test, TestInfo } from '@playwright/test';

export async function screenshotOnFailure({ page }: { page: Page }, testInfo: TestInfo) {
  if (testInfo.status !== testInfo.expectedStatus) {
    // Get a unique place for the screenshot.
    const screenshotPath = testInfo.outputPath(`failure.png`);
    // Add it to the report.
    testInfo.attachments.push({ name: 'screenshot', path: screenshotPath, contentType: 'image/png' });
    // Take the screenshot itself.
    await page.screenshot({ path: screenshotPath, timeout: 5000 });
  }
}

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test.afterEach(screenshotOnFailure);

test.describe('Sanity', () => {
  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Gigatechspace tech task/);

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', 'A tech task for Gigatechspace');
  });

  test('Shows and hides the components by pressing the checkboxes', async ({ page }) => {
    await page.click('text=Component 1');
    await expect(page.locator('data-testid=component')).toBeVisible();
    await page.click('text=Component 1');
    await expect(page.locator('data-testid=component')).not.toBeVisible();
  });
});
