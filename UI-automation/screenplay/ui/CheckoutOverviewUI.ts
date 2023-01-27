import { by, Target } from '@serenity-js/webdriverio';

export const CheckoutOverviewUI = {

    inventoryTitleItem: (productName: string) =>
    Target.the('Inventory Item Title').located(by.xpath(`//a[@id='item_1_title_link']/descendant::div[contains(@class,'item_name') and contains(text(), '${productName}')]`)),

    firstInventoryItemTitle: () =>
    Target.the('Title of First Item on Inventory Item').located(by.xpath(`//a[@id='item_1_title_link']/descendant::div[contains(@class,'item_name')]`)),

    headerCheckout: () =>
        Target.the('Checkout Header').located(by.xpath("//div[contains(@class, 'header')]/descendant::span[@class='title']")),

    finishElement: () =>
        Target.the('Checkout Finish Element').located(by.id("finish")),
}
