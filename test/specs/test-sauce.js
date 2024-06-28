describe('Saucedemo Login Test', () => {
    it('Add item to cart', async () => {
        await browser.url('https://www.saucedemo.com/')
        const username = await browser.$('#user-name')
        const password = await browser.$('#password')
        const loginButton = await browser.$('//input[@id="login-button"]')
        const product = await browser.$('#add-to-cart-sauce-labs-backpack')
        const nameProduct = await browser.$('//a[@id="item_4_title_link"]')
        const cartIcon = await browser.$('#shopping_cart_container')
        
        // Login page
        await username.waitForDisplayed({ timeout: 3000 })
        await username.setValue("standard_user")
        await password.setValue("secret_sauce")
        await loginButton.click()

        // Dashboard page
        await expect(cartIcon).toBeDisplayed()
        
        // Get product name and add to cart
        const itemNameText = await nameProduct.getText()
        await product.click()
        await cartIcon.click()
        await browser.pause(3000)

        // Cart page
        await expect(nameProduct).toHaveTextContaining(itemNameText)
    });
});
