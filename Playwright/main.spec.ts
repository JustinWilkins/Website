import { test, expect } from '@playwright/test';

test.describe('Website Basic Functionality', () => {

    test('Homepage should load and have correct title', async ({ page }) => {
        await page.goto('https://justin-wilkins.netlify.app');
        await expect(page).toHaveTitle(/Justin Wilkins/);
        const heading = page.locator('h1');
        await expect(heading).toBeVisible();
    });
});