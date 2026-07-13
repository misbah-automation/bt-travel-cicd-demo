# BT Travel Playwright CI/CD Demo — Setup Guide

## 1. Purpose

This guide contains the steps required to create the BT Travel Playwright CI/CD demonstration project.

It can be used in the future to recreate the project without depending on memory.

## 2. Required Tools

The following tools should be installed:

* Node.js
* npm
* Git
* Visual Studio Code
* GitHub account

Verify the tools by running:

```powershell
node --version
npm --version
git --version
code --version
```

Each command should display an installed version.

## 3. GitHub Repository

Create a public GitHub repository using the following details:

```text
Repository name:
bt-travel-cicd-demo
```

```text
Description:
A Playwright CI/CD proof of concept demonstrating automated login testing and deployment through GitHub Actions.
```

Recommended repository options:

* Visibility: Private
* Add README: Yes
* Gitignore template: Node
* License: None

## 4. Clone the Repository

Copy the HTTPS repository URL from GitHub.

Run:

```powershell
git clone https://github.com/YOUR-USERNAME/bt-travel-cicd-demo.git
```

Open the project:

```powershell
cd bt-travel-cicd-demo
code .
```

Check the repository status:

```powershell
git status
```

## 5. Project Structure

Create the following folders:

```text
app
pages
tests
docs
.github/workflows
```

Create the following documentation files:

```text
docs/PRD.md
docs/SETUP_GUIDE.md
```

The expected structure is:

```text
bt-travel-cicd-demo/
│
├── .github/
│   └── workflows/
│
├── app/
│
├── docs/
│   ├── PRD.md
│   └── SETUP_GUIDE.md
│
├── pages/
│
├── tests/
│
├── .gitignore
└── README.md
```

Folders and files can be created manually through the VS Code Explorer.

They can also be created through PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path app,pages,tests,docs,'.github/workflows'
```

```powershell
New-Item -ItemType File -Path docs/PRD.md,docs/SETUP_GUIDE.md
```

## 6. Create the Demo Login Application

Inside the `app` folder, create:

```text
app/
├── index.html
├── style.css
└── login.js

## 7. Manual Verification

Before adding automation, verify the application manually.

The following cases should pass:

Open the login page successfully.
Submit both fields empty.
Enter an invalid email format.
Enter incorrect credentials.
Enter correct credentials.
Log out after a successful login.

Demo credentials:

Email: qa@bttravel.demo
Password: Test@123

Expected result:

All manual login test cases pass.

# Step 11: Install Playwright

Open the VS Code terminal:

```text
Terminal
→ New Terminal

## 9. Run Login Automation Tests

Run the login tests in Chromium:

```powershell
npx playwright test tests/login/login.spec.js --project=chromium