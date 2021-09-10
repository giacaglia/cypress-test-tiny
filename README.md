# cypress-test-tiny

Reproducing the problem that we've encountered with Cypress 8 where we are getting network failures between tests.

In order to run this test, you need to run the following:

```
yarn start:frontend
```

and then run the following on another terminal:

```
yarn start:backend
```

This starts the Express server.

In order to run the Cypress tests, you need to run the following command:

```
yarn cypress open
```

When the test fails, you can see the console log statements in the terminal windows.
