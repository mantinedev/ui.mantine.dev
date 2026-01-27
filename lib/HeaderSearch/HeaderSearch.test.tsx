import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeaderSearch } from './HeaderSearch';

describe('HeaderSearch', () => {
  axe([<HeaderSearch key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeaderSearch {...(attributes as any)} />);
  });
});
