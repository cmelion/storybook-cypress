module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "addon-redux",
    "storybook-axios/register",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "features": {
    "interactionsDebugger": true,
  },
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('babel-plugin-istanbul'),
      // "istanbul" -> doesn't work too
    ]
    // any extra options you want to set
  })
}