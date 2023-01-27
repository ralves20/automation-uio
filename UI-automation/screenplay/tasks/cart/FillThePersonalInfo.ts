import { equals } from "@serenity-js/assertions";
import { Ensure } from "@serenity-js/assertions/lib/Ensure";
import { Note } from "@serenity-js/core/lib/screenplay/questions/Note";
import { Task } from "@serenity-js/core/lib/screenplay/Task";
import { Click, Enter, Text } from "@serenity-js/webdriverio";
import { CartCheckoutUI } from "../../ui/CartCheckoutUI";
import { CartItems } from "../../ui/CartItemsUI";
import { InformationUI } from "../../ui/InformationUI";

export class FillThePersonalInfo {

    static firstName = "TEST";
    static lastName = "USER";
    static zipCode = "123456";

    static toBuyOnEcomm = () =>
        Task.where(`#actor fills all the proper info required to buy a product on the ecommerce`,
            Enter.theValue(this.firstName).into(InformationUI.firstName()),
            Enter.theValue(this.lastName).into(InformationUI.lastName()),
            Enter.theValue(this.zipCode).into(InformationUI.zipCode()),
            Click.on(InformationUI.continueElement())
        )

}