# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Run `npm install` followed by `npm run install-peers`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the JSON Server and Storybook Dashboard instances in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the Storybook Dashboard.

The components will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run cypress:open`

Launches the test runner in the interactive watch mode.\

### `npm run integration-test`

Launches all services necessary to support tests, outputing to the console, works locally and in CI.

### `npm run open:coverage`

Launches a browser and opens the coverage generated by cypress tests

## Development

Forms are build using [react-jsonschema-form](https://react-jsonschema-form.readthedocs.io/en/latest/) - 
A simple React component capable of building HTML forms out of a [JSON schema](http://json-schema.org/).

API calls are mocked via [json-server](https://github.com/typicode/json-server)
