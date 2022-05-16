# Getting Started with Storybook Cypress

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Run `npm install` followed by `npm run install-peers`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the JSON Server and Storybook Dashboard instances in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the Storybook Dashboard.
API calls will target [http://localhost:3030](http://localhost:3030/userWallsAPIResponseGeneratorPostSchema )

The components will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run cypress:open`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm run test:all`

Launches all services necessary to support tests, outputing to the console, works locally and in CI.
