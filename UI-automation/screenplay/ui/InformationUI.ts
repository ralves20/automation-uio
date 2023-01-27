import { by, Target } from '@serenity-js/webdriverio';

export const InformationUI = {

    firstName: () =>
        Target.the('First Name').located(by.id("first-name")),

    lastName: () =>
        Target.the('Last Name').located(by.id("last-name")),

    zipCode: () =>
        Target.the('Zip Code').located(by.id("postal-code")),

    continueElement: () =>
        Target.the('Continue Element').located(by.id("continue")),
}
