# Playwright Test Automation Framework

Hey there! 👋 This is my test automation framework built with Playwright and TypeScript. I've spent 7 years in QA and wanted to create something clean, practical, and easy to understand.

## What's This About?

This framework follows industry standards but keeps things simple. It uses the Page Object Model, has custom fixtures to avoid repetitive code, and includes helper functions I actually use in my day-to-day testing.

## What's Inside

**The Good Stuff:**
- Page Object Model (no messy test files!)
- Custom fixtures (login once, use everywhere)
- Utility functions for common tasks
- Runs on Chrome, Firefox, and Safari
- TypeScript for catching bugs early
- Auto-generates test reports with screenshots

**Tech Stack:**
- Playwright 1.41
- TypeScript 5.3
- Node.js 18+

## Project Layout

Here's how everything is organized:
```
playwright-automation-framework/
├── pages/           # Page objects (one file per page)
├── tests/           # Your actual tests
├── fixtures/        # Reusable test setup stuff
├── utils/           # Helper functions
├── data/            # Test data (usernames, etc.)
└── config/          # Settings
```

**Why this structure?** It's easier to find things. Need to update a locator? Check `pages/`. Writing a new test? Go to `tests/`. Simple.

## Getting Started

**What You Need:**
- Node.js (version 18 or higher)
- Git
- A code editor (I use VS Code)

**Installation:**
```bash
# Clone this repo
git clone https://github.com/YOUR_USERNAME/playwright-automation-framework.git
cd playwright-automation-framework

# Install everything
npm install

# Download the browsers
npx playwright install
```

**Environment Setup:**

Create a `.env` file in the root folder:
```
BASE_URL=https://practicetestautomation.com/practice-test-login/
TIMEOUT=30000
```

That's it! You're ready to run tests.

## Running Tests

**Basic commands:**
```bash
# Run everything
npm test

# See the browser while tests run
npm run test:headed

# Debug a failing test
npm run test:debug

# Run just one test file
npx playwright test tests/e2e/login.spec.ts

# Run only Chrome tests
npm run test:chrome
```

**View test results:**
```bash
npm run report
```

Opens a nice HTML report showing what passed, what failed, and includes screenshots of any failures.

## How to Write Tests

I've set things up so tests are readable and maintainable. Here's an example:
```typescript
import { test, expect } from '../../fixtures/base.fixtures';
import { LoginPage } from '../../pages/LoginPage';

test('user can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigateToLogin();
  await loginPage.login('student', 'Password123');
  
  await expect(page).toHaveURL(/logged-in/);
});
```

**The cool part?** If the login button locator changes, I only update it in one place (`LoginPage.ts`), not in 20 different test files.

## Using Fixtures (My Favorite Feature)

Instead of logging in at the start of every test, I use fixtures:
```typescript
test('check dashboard', async ({ authenticatedPage }) => {
  // Already logged in! No setup needed.
  await expect(authenticatedPage).toHaveURL(/dashboard/);
});
```

The fixture handles login automatically. Saves a ton of time and keeps tests focused on what they're actually testing.

## Helper Functions

I got tired of writing the same code over and over, so I created utilities:

**Generate test data:**
```typescript
import { RandomUtils } from '../utils/randomUtils';

const email = RandomUtils.randomEmail();           // user_123@test.com
const name = RandomUtils.randomName();             // { firstName: 'John', lastName: 'Doe' }
const password = RandomUtils.randomPassword(12);   // Strong random password
```

**Work with dates:**
```typescript
import { DateUtils } from '../utils/dateUtils';

const today = DateUtils.getCurrentDate();          // 2026-02-15
const tomorrow = DateUtils.addDays(1);             // 2026-02-16
const lastWeek = DateUtils.addDays(-7);            // 2026-02-08
```

**Format strings:**
```typescript
import { StringUtils } from '../utils/stringUtils';

StringUtils.capitalize('hello');                    // Hello
StringUtils.toTitleCase('hello world');            // Hello World
```

These save me time in every project.

## Project Structure Explained

**pages/** - Each file represents one page of the app. All the locators and actions for that page live here.

**tests/** - The actual test scenarios. These should read like plain English.

**fixtures/** - Setup code that runs before tests. Like logging in, setting up data, etc.

**utils/** - Generic helper functions I use across multiple tests.

**data/** - Test data like usernames, product info, etc. Easier to manage than hardcoding in tests.

## Things I Learned Building This

1. **Page Objects are worth it.** Yes, it's extra files, but when locators change (and they will), you'll thank yourself.

2. **Fixtures save massive time.** No more copy-pasting login code into every test.

3. **TypeScript helps.** Autocomplete alone makes it worthwhile. Plus it catches typos before runtime.

4. **Parallel execution is fast.** 100 tests in a few minutes instead of an hour.

## Roadmap

What I'm planning to add:
- [ ] Multi-environment support (dev, staging, prod)
- [ ] API testing examples
- [ ] CI/CD with GitHub Actions
- [ ] Visual regression testing
- [ ] Better reporting with Allure

## Contributing

Found a bug? Have an idea? Feel free to open an issue or submit a PR. I'm always looking to improve this.

## About Me

I've been in QA for 7 years, mostly doing automation. Built this framework while learning Playwright and wanted to share it. If you find it helpful, great! If you have suggestions, even better.

## Credits

- Built with [Playwright](https://playwright.dev/)
- Practice site: [practicetestautomation.com](https://practicetestautomation.com/)
- Learned a lot from the Playwright community

## License

ISC - Use it however you want.

---

**Questions?** Open an issue or reach out. Happy to help!

*Last updated: February 2026*
