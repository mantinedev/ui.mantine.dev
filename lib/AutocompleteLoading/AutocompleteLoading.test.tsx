import { axe, render } from '@/test-utils';
import { AutocompleteLoading } from './AutocompleteLoading';
import attributes from './attributes.json';

describe('AutocompleteLoading', () => {
  axe([<AutocompleteLoading key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<AutocompleteLoading {...(attributes as any)} />);
  });
});
