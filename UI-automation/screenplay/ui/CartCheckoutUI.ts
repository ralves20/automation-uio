import { by, Target } from '@serenity-js/webdriverio';

export const CartCheckoutUI = {

    inventoryTitleItem: (productName: string) =>
        Target.the('Inventory Item Title').located(by.xpath(`//div[contains(@class, 'inventory_item_name') and contains(text(), '${productName}')]`)),

    firstInventoryItemTitle: () =>
        Target.the('Title of First Item on Inventory Item').located(by.xpath(`//div[contains(@class, 'inventory_item_name')]`)),

    checkoutElement: () =>
        Target.the('Checkout Element').located(by.id("checkout")),
}
