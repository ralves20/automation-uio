The Challenge of Automation a Web UI Test for the Ticket Search

## The Challenge Details

### Task: implement web UI automation
**STEPS**:
a) Use https://gorest.co.in/
b) Choose one of available endpoints
c) Automate the testing of endpoint via a Postman collection(s)
d) Provide the readme to the solution


# 1. THE PROJECT

Below are described the details of the project, of what tools and lib were used, how to setup it, how to run and some additional info.

## 1.1. Description of the project Project
This project is using Postman API automation, as it allows to have faster requests, created in a simple way
 



## 1.2. Structure of the project Project

Belows are the tool used to perform the development of this project.
- [Serenity/JS Website](https://serenity-js.org)
- [Serenity/JS Tutorial](https://serenity-js.org/handbook/thinking-in-serenity-js/index.html)
- [Serenity/JS API Docs](https://serenity-js.org/modules)
- [Cucumber](https://github.com/cucumber/cucumber-js)
- [NodeJS](https://nodejs.org/en/),
- [TypeScript](https://www.typescriptlang.org/),
- [JavaScript](https://www.javascript.com/),
- [Serenity BDD reports for this project](https://serenity-js.github.io/serenity-js-cucumber-webdriverio-template/)

## 1.3. Prerequisites to run

To use this project, you'll need:
- Node.js, a Long-Term Support (LTS) release version 16 or later - [download](https://nodejs.org/en/)
- Java Development Kit (JDK) version 8 or later - [download](https://adoptopenjdk.net/)


### 1.4 Installation / Setup

Once you have the code on your computer, use your computer terminal to run the following command in the directory where you've cloned the project:
```
npm ci
```

Running [`npm ci`](https://docs.npmjs.com/cli/v6/commands/npm-ci) downloads the [Node modules](https://docs.npmjs.com/about-packages-and-modules) this project depends on,
as well as the latest version of [Serenity BDD CLI](https://github.com/serenity-bdd/serenity-cli) reporter jar. 

### 1.5. Corporate networks

If your network administrators require you to use proxy servers or an internal artifact registry (Artifactory, Nexus, etc.), your development environment might require some additional configuration.

The easiest way to do it is to create an [`.npmrc` file](https://docs.npmjs.com/cli/v6/configuring-npm/npmrc) in your home directory: 

```
proxy=http://user:password@host.mycompany.com:8080/
https-proxy=http://user:password@host.mycompany.com:8080/
strict-ssl=false
registry=https://artifactory.mycompany.com/artifactory/
```

Similar instructions are available for the [`chromedriver` module](https://www.npmjs.com/package/chromedriver).

## 2. RUNNING THE TESTS

### 2.1. Execution of the tests

```
npm run lint            # runs code linter
npm run lint:fix        # attempts to automatically fix linting issues
npm run clean           # removes reports from any previous test run
npm run test:execute    # executes the tests without generating the report
npm test                # executes the test suite
                        # and generates the report under ./target/site/serenity
```


### 2.2. Test Report
After the test execution the reports (which also have screenshots) will be generated in the `target/site/serenity` directory, then you can see the report by just opening the `index.html` file



# About myself 
#### (the guy who received the challenge)

![ralves20-profile-avatar](https://avatars.githubusercontent.com/u/40844089)
#### This is my profile on Github: [ralves20](https://github.com/ralves20)


* I'm just a simple guy who is passionate about the testing automation and everything related to the software quality world.
* I'm enthusiastic about Design Patterns in software testing and the DevOps world too
* I love to watch comedy tv shows and movies
* Linux is the best!


