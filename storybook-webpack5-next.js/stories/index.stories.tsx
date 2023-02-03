import React from 'react';
import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Home from './index';

export default {
  title: 'Example/Home',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStoryFn<typeof Home> = (args) => <Home {...args} />;

export const nextHome = Template.bind({});
