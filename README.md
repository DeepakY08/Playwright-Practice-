# Playwright Practice

This repository is dedicated to learning and practicing Playwright automation using JavaScript. It contains hands-on exercises, test scripts, and examples to improve my UI automation testing skills.

## Project Structure

```text
Playwright-Practice/
├── tests/
│   └── Example.spec.js
├── tests/
│   └── data/
│       └── testData.json
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## Folder Details

### `tests/`
The main folder where I write, execute, and practice Playwright test scripts. It includes UI automation scenarios, assertions, locators, and hands-on exercises.

### `tests/data/`
Stores test data required for automation scripts, such as test inputs, user details, search values, and other reusable data. JSON files can be used to manage test data separately from test scripts.

### `playwright.config.js`
Contains Playwright configuration, including browser settings, test execution options, and reporting.

## Technologies Used

- JavaScript
- Playwright
- Node.js
- Git and GitHub

## Running Tests

Run all Playwright tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/Example.spec.js
```

View the HTML test report:

```bash
npx playwright show-report
```

## Learning Goals

- Practice Playwright fundamentals and locators
- Write and execute UI automation scripts
- Work with reusable test data
- Learn assertions, debugging, and test reporting
- Improve automation skills through hands-on practice

This repository will be updated regularly as I continue learning and practicing Playwright.
