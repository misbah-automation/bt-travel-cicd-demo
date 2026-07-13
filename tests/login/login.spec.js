import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/auth/LoginPage.js';
import { loginData } from '../../fixtures/auth/loginData.js';

test.describe('BT Travel Login', () => {
  test('login page UI is visible', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.verifyLoginPageVisible();
  });

  test('empty fields show required errors', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.loginButton.click();

    await expect(loginPage.emailError).toHaveText(
      'Email address is required.'
    );

    await expect(loginPage.passwordError).toHaveText(
      'Password is required.'
    );
  });

  test('invalid email format shows an error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      loginData.invalidEmail.email,
      loginData.invalidEmail.password
    );

    await expect(loginPage.emailError).toHaveText(
      'Enter a valid email address.'
    );
  });

  test('incorrect credentials show an error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      loginData.invalidUser.email,
      loginData.invalidUser.password
    );

    await expect(loginPage.loginError).toHaveText(
      'Invalid email address or password.'
    );
  });

  test('valid credentials open the dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      loginData.validUser.email,
      loginData.validUser.password
    );

    await loginPage.verifyDashboardVisible();
  });

  test('logout returns the user to the login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      loginData.validUser.email,
      loginData.validUser.password
    );

    await loginPage.logout();

    await loginPage.verifyLoginPageVisible();
    await expect(loginPage.emailInput).toHaveValue('');
    await expect(loginPage.passwordInput).toHaveValue('');
  });
});