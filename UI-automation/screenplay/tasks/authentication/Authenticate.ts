import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/webdriverio';

import { LoginUI } from '../../ui/LoginUI';

const standardUser = 'standard_user';
const passForAll = 'secret_sauce';

export class Authenticate {
    private static using = (username: string, password: string) =>
        Task.where(`#actor logs in as ${username}`,
            Enter.theValue(username).into(LoginUI.usernameField()),
            Enter.theValue(password).into(LoginUI.passwordField()),
            Click.on(LoginUI.loginButton()),
        )
    static usingStandardUser = () =>
        Task.where(`#actor authenticates using the standard user`,
            Authenticate.using(standardUser, passForAll),
        )

}