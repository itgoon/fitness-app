import React from "react";
import alfaTheme from "./theme";
/** @type { import('@storybook/react').Preview } */

export const parameters = {
  viewMode: "docs",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    theme: alfaTheme
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "Quick start",
        "Components overview",
        "Icons overview",
        "Changelog",
        "UI"
      ]
    }
  }
};

export const decorators = [
  (Story) => {
    return (
      <div className="sb-unstyled">
        <Story />
      </div>
    );
  }
];

export default {
  parameters,
  decorators
};
