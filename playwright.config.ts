import { defineConfig } from '@playwright/test';

export default defineConfig({
    reporter: [['json', { outputFile: 'playwright-report/results.json' }]],
    use: {
        headless: true,
    },
});