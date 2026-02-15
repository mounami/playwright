import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
    testDir: "./tests",
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter:[
        ["html", {outputFolder: "playwright-report"}],
        ["json", {outputFile: "playwright-report/report.json"}],
        ["junit", {outputFile: "playwright-report/report.xml"}],
        ["list"]
    ],
    use: {
        baseURL: process.env.BASE_URL || 'https://practicetestautomation.com/practice-test-login/',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        actionTimeout: 10000,
        navigationTimeout: 30000,
      },
      projects:[{
        name: 'chromium',
        use: { ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }},
      },
      {
        name: 'firefox',
        use: { 
          ...devices['Desktop Firefox'],
          viewport: { width: 1920, height: 1080 }
        },
      },
  
    //   {
    //     name: 'webkit',
    //     use: { 
    //       ...devices['Desktop Safari'],
    //       viewport: { width: 1920, height: 1080 }
    //     },
    //   },
    //   {
    //     name: 'mobile-chrome',
    //     use: { ...devices['Pixel 5'] },
    //   },
    //   {
    //     name: 'mobile-safari',
    //     use: { ...devices['iPhone 12'] },
    //   },
    ]

})