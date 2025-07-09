class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('#shopping_cart_container');
        this.checkoutButton = page.locator('#checkout');
        this.firstNameField = page.locator('#first-name');
        this.lastNameField = page.locator('#last-name');
        this.postalCodeField = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
    }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async navigateToCart() {
        await this.cartIcon.click();
    }

    async proceedToCheckout(firstName, lastName, postalCode) {
        await this.checkoutButton.click();
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.postalCodeField.fill(postalCode);
        await this.continueButton.click();
    }

    async completeCheckout() {
        await this.finishButton.click();
    }
}

module.exports = { CheckoutPage };
