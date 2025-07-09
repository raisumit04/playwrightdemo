# playwrightSuaceLab

This project uses [Playwright](https://playwright.dev/) for end-to-end testing, written in **JavaScript**.

## 🚀 Getting Started

### 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/raisumit04/playwrightdemo.git
cd playwrightdemo
npm install
```

(or with `yarn`)

```bash
yarn install
```

### ⚙️ Running Tests

Run all Playwright tests:

```bash
npx playwright test
```

or:

```bash
yarn playwright test
```

### 🐞 Debugging Tests

Run tests in debug mode with the inspector:

```bash
npx playwright test --debug
```

### 📸 Viewing Reports

Playwright creates an HTML report after running tests. To open it:

```bash
npx playwright show-report
```

---

## ⚠️ Note on Intentionally Failing Tests

> **Important:**
> Some test cases in this project are **intentionally designed to fail**.
> This is done to:
>
> * Demonstrate how Playwright reports failures.
> * Show screenshot & trace capturing in failure scenarios.
>


## 🛠 Configuration

Playwright is configured in:

```
playwright.config.js
```

Adjust browser settings, timeouts, retries, and more there.

---

## ✅ Formatting & Linting

Run format/lint scripts to keep your code clean:

```bash
npm run format
npm run lint
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---



✅ **Happy Testing with Playwright & JavaScript!** 🎭

---
