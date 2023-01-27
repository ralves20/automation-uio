import { Ensure, includes } from '@serenity-js/assertions';
import { TakeNote, Task } from '@serenity-js/core';
import { Click, Enter, isVisible, Text } from '@serenity-js/webdriverio';
import { CartItems } from '../../ui/CartItemsUI';


export class AddIntoTheCart {

    static aProductNamed = (productName: string) =>
        Task.where(`#actor verifies that authentication has succeeded`,
            TakeNote.of(Text.of(CartItems.itemsTitleDescription(productName))).as("MyProduct"),
            Click.on(CartItems.addToCartWithTitle(productName))
        )

}
