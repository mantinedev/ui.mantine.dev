import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { AutocompleteLoading } from './AutocompleteLoading';

describe('AutocompleteLoading', () => {
  axe([<AutocompleteLoading key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<AutocompleteLoading {...(attributes as any)} />);
  });
});
