import { equals } from "@serenity-js/assertions";
import { Ensure } from "@serenity-js/assertions/lib/Ensure";
import { Note } from "@serenity-js/core/lib/screenplay/questions/Note";
import { Task } from "@serenity-js/core/lib/screenplay/Task";
import { Click, Text } from "@serenity-js/webdriverio";
import { CartCheckoutUI } from "../../ui/CartCheckoutUI";
import { CartItems } from "../../ui/CartItemsUI";

export class PerformTheCheckout {

    static onCart = () =>
        Task.where(`#actor performs the checkout on cart`,
            Click.on(CartItems.goToCart()),
            Ensure.that(Text.of(CartCheckoutUI.firstInventoryItemTitle()), equals(Note.of("MyProduct"))),
            Click.on(CartCheckoutUI.checkoutElement())
        )

}