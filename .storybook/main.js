module.exports = {
  "stories": [
    "../src/**/*.stories.(js|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-contexts/register",
    "@storybook/addon-knobs",
    {
      name: "@storybook/docs",
      options: {
        configureJSX: true,
      }
    }
  ]
}