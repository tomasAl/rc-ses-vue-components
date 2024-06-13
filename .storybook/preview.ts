import { setup } from '@storybook/vue3';
import registerPlugins from '../src/plugins';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';
import type { Preview } from "@storybook/vue3";

setup((app) => {
  // Registers your app's plugins into Storybook
  registerPlugins(app);
});
const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;

export const decorators = [withVuetifyTheme];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
