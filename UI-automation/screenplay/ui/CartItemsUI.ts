import { by, Target } from '@serenity-js/webdriverio';

export const CartItems = {
    itemsTitleDescription: (productName: string) =>
        Target.the('Items Title Description').located(by.xpath(`//div[contains(@class, 'inventory_item_name') and contains(text(), '${productName}')]`)),

    addToCartWithTitle: (productName: string) =>
        Target.the('Items Add to Cart Closest').located(by.xpath(`//div[contains(@class, 'inventory_item_name') and contains(text(), '${productName}')]/ancestor::div[contains(@class, 'item_description')]/descendant::button`)),


    goToCart: () =>
        Target.the('Go to cart').located(by.xpath("//a[@class='shopping_cart_link']")),
}
