import 'cypress-storybook/react'
import withAxiosDecorator from 'storybook-axios';
import axios from 'axios';
import { RequestProvider } from 'react-request-hook';
const config = require('../package.json').config;
const defaultTarget = config.defaultTarget;
const port = config.apiPort;

const axiosInstance = axios.create({
  baseURL: `${defaultTarget}${port}`
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withAxiosDecorator(axiosInstance),
  (Story) => (
      <RequestProvider value={axiosInstance}>
        <Story />
      </RequestProvider>
  ),
];

export const loaders = [
  async () => ({
    store: await import('../src/state/store'),
  })
]
