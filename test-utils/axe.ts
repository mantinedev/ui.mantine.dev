import React from 'react';
import { axe as Axe, toHaveNoViolations } from 'jest-axe';
import { renderWithAct } from './render';

const config = {
  rules: {
    region: {
      enabled: false,
    },

    'autocomplete-valid': {
      enabled: false,
    },
  },
};

export function axe(elements: React.ReactElement[], axeOptions?: any) {
  expect.extend(toHaveNoViolations);

  it('has no accessibility violations', async () => {
    for (const element of elements) {
      const { container } = await renderWithAct(element);
      const combinedConfig = {
        ...config,
        ...axeOptions,
        rules: {
          ...config.rules,
          ...(axeOptions?.rules || {}),
        },
      };
      const result = await Axe(container, combinedConfig);
      expect(result).toHaveNoViolations();
    }
  }, 30000);
}
