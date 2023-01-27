import { by, Target } from '@serenity-js/webdriverio';

export const OrderFinishedUI = {

    headerCompleted: () =>
        Target.the('Complete Header').located(by.xpath("//h2")),

}
