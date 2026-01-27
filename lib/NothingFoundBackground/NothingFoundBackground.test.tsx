import { axe, render } from '@/test-utils';
import { NothingFoundBackground } from './NothingFoundBackground';
import attributes from './attributes.json';

describe('NothingFoundBackground', () => {
  axe([<NothingFoundBackground key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NothingFoundBackground {...(attributes as any)} />);
  });
});
