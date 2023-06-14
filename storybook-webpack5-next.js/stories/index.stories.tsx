import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Home from './index';

export default {
  title: 'Example/Home',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof Home>;

export const nextHome = {};
