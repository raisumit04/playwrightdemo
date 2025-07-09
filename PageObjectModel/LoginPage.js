export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'LOGIN' });
        this.burgerMenuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    async navigate() {
        await this.page.goto('/');
    }

    async login(username, password) {
        try {
            await this.usernameField.waitFor({ state: 'visible' });
            await this.usernameField.fill(username);
            await this.passwordField.fill(password);
            await this.loginButton.click();
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    async logout() {
        try {
            await this.burgerMenuButton.waitFor({ state: 'visible' });
            await this.burgerMenuButton.click();
            await this.logoutLink.waitFor({ state: 'visible' });
            await this.logoutLink.click();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }
}
