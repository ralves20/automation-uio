import 'expect-webdriverio';

import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight, Check, Note, See } from '@serenity-js/core';
import { Click, isVisible, Navigate, Text } from '@serenity-js/webdriverio';
import { Authenticate } from '../../screenplay/tasks/authentication';
import { AddIntoTheCart } from '../../screenplay/tasks/cart/AddIntoTheCart';
import { PerformTheCheckout } from '../../screenplay/tasks/cart/PerformTheCheckout';
import { FillThePersonalInfo } from '../../screenplay/tasks/cart/FillThePersonalInfo';
import { CheckoutOverviewUI } from '../../screenplay/ui/CheckoutOverviewUI';
import { Ensure, equals } from '@serenity-js/assertions';
import { OrderFinishedUI } from '../../screenplay/ui/OrderFinishedUI';


Given('that {actor} is properly authenticated in the Sauce Demo ecommerce', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('https://www.saucedemo.com/'),
        Authenticate.usingStandardUser()
    )
);

Given(/s?he adds the product (.*) into the cart/, async (productName: string) =>
    actorInTheSpotlight().attemptsTo(
        AddIntoTheCart.aProductNamed(productName)
    )
);

When(/s?he concludes the checkout after filling all the information properly/, async () =>
    actorInTheSpotlight().attemptsTo(
        PerformTheCheckout.onCart(),
        FillThePersonalInfo.toBuyOnEcomm(),

    )
);

Then(/s?he should see the page with the checkout completion/, async () =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(
            Text.of(CheckoutOverviewUI.firstInventoryItemTitle()), equals(Note.of("MyProduct"))
        ),
        Click.on(CheckoutOverviewUI.finishElement()),
        Ensure.that(OrderFinishedUI.headerCompleted(), isVisible()),
        Ensure.that(Text.of(OrderFinishedUI.headerCompleted()), equals("THANK YOU FOR YOUR ORDER"))
    )
);

