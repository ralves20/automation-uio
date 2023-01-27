import { by, Target } from '@serenity-js/webdriverio';

export const LoginUI = {
    usernameField: () =>
        Target.the('username field').located(by.id('user-name')),

    passwordField: () =>
        Target.the('password field').located(by.id('password')),

    loginButton: () =>
        Target.the('login button').located(by.id('login-button')),
}
