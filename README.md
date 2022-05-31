![eclipse](https://user-images.githubusercontent.com/752719/171046557-3e1714a4-de18-42b3-acef-67a84f9c7709.png)


Many organizations develop a vast pool of internal browser-based tools that impact both internal and external "customers".  These internal tools are often a mix of more opinionated frameworks like Angular or less opinionated ones like React or perhaps Vue or Svelte.  For each tool the decisions on authentication, package management, build-tools, implementation language and testing frameworks/strategies and off-the-shelf component libraries is replicated. 

Some organizations attempt to combat this by hosting all features in a single mono-app/repo.  This inevitably leads to a bloated code-base with many different coding styles and legacy dependencies that make it difficult to determine what current best practices are.  Eventually everthing is scrapped and the entire process starts anew.

An alternative approach is to provide a light-weight shell that surfaces some common features and patterns like authentication, state-management, navigation, form handling and UX components.  This approach allows developers to create additonal components and functionality, both simple and complex, independently and deploy as components to repositories such as [npm](https://www.npmjs.com/) or [Artifactory](https://jfrog.com/artifactory/).  These components can then be demand-loaded to improve scalability.

The challenge is to provide an environment to develop components that are intended to be hosted in a containing application that provides a large portion of the core functionality while still allowing individual components to bring in unique features.

# Building UI components and pages in isolation

![image](https://user-images.githubusercontent.com/752719/171044996-cf9b6e70-72e1-48b8-be97-70d802969256.png)

When building a design system, we like to see components rendered in isolation. This also applies to components as applications.  What better tool to do that than [Storybook](https://storybook.js.org/)? We can see our components, wrap them in decorators, and show our stakeholders beautiful user story demos.

Once we know how our components should look and behave, we want to test them. For that part, we can use [Cypress](https://www.cypress.io/). How great would it be if we could just re-use the stories from Storybook to test our component? 

# Test Automation: Speaking the right language

![Single Source of Truth-BDD-Workflow](https://user-images.githubusercontent.com/752719/171225328-9dd1d407-1e2d-44fe-b945-d6b27d425ca3.png)


As applications get more complex, it becomes a priority for test automation systems to capture and clearly express business intent, to ensure that the most important functionality of the system is sufficiently covered. They need to be easy to scale to multiple projects and teams, and all this while keeping maintenance costs to a minimum.

# Expresssing test scenarios in business language

More and more teams nowadays are adopting a more collaborative approach to defining requirements, using tools like Cucumber to define executable acceptance criteria in a more human-readable form.

Cucumber scenarios are typically expressed using a high-level business language, so you won't see any mentions of clicking on buttons or entering values into fields. This helps the scenario play its role as a collaboration and documentation tool, without getting too tied down to how the application is implemented under the hood.

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Run `npm install` followed by `npm run install-peers`

## Available Scripts

In the project directory, you can run:

 `npm start`

Runs the JSON Server and Storybook Dashboard instances in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the Storybook Dashboard.

The components will reload if you make edits.
You will also see any lint errors in the console.


 `npm run cypress:open`

Launches the test runner in the interactive watch mode.

 `npm run integration-test`

Launches all services necessary to support tests, outputing to the console, works locally and in CI.

 `npm run open:coverage`

Launches a browser and opens the coverage generated by cypress tests

## Development

Forms are built using [react-jsonschema-form](https://react-jsonschema-form.readthedocs.io/en/latest/) - 
A simple React component capable of building HTML forms out of a [JSON schema](http://json-schema.org/).

API calls are mocked via [json-server](https://github.com/typicode/json-server)

## Pull-Requests

Coverage metrics are generated and available in the PR comments.

An HTML code coverage report - generated by istanbul - will also be deployed to https://cmelion.github.io/storybook-cypress/ with each push to a PR branch.
Coverage reflects status of the latest push.
