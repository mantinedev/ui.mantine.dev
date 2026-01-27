import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<MantineProvider>{ui}</MantineProvider>);
}

export async function renderWithAct(ui: React.ReactElement) {
  return render(ui);
}
