import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    this.loginCard = page.getByTestId('login-card');
    this.loginHeading = page.getByTestId('login-heading');
    this.emailInput = page.getByTestId('email-input');
    this.passwordInput = page.getByTestId('password-input');
    this.loginButton = page.getByTestId('login-button');

    this.emailError = page.getByTestId('email-error');
    this.passwordError = page.getByTestId('password-error');
    this.loginError = page.getByTestId('login-error');

    this.dashboard = page.getByTestId('dashboard');
    this.dashboardHeading = page.getByTestId('dashboard-heading');
    this.successMessage = page.getByTestId('login-success-message');
    this.logoutButton = page.getByTestId('logout-button');
  }

  async open() {
    await this.page.goto('/');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }

  async verifyLoginPageVisible() {
    await expect(this.loginCard).toBeVisible();
    await expect(this.loginHeading).toHaveText('BT Travel');
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async verifyDashboardVisible() {
    await expect(this.dashboard).toBeVisible();
    await expect(this.dashboardHeading).toHaveText(
      'Welcome to BT Travel'
    );
    await expect(this.successMessage).toHaveText(
      'You have logged in successfully.'
    );
  }
}