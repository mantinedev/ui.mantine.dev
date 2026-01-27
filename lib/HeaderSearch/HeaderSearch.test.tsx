import { axe, render } from '@/test-utils';
import { HeaderSearch } from './HeaderSearch';
import attributes from './attributes.json';

describe('HeaderSearch', () => {
  axe([<HeaderSearch key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeaderSearch {...(attributes as any)} />);
  });
});
