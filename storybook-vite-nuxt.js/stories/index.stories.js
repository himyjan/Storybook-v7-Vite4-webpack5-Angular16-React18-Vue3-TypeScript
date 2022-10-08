import { within, userEvent } from '@storybook/testing-library';
import Home from './index.vue';

export default {
  title: 'Example/index',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Home },

  // Here we define the `template`
  template: '<my-home />',
});

export const nuxtHome = Template.bind({});
