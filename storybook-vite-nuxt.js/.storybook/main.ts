const path = require('path');
module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-nuxt'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  features: {
    previewMdx2: true,
  },
};
