import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NothingFoundBackground } from './NothingFoundBackground';

describe('NothingFoundBackground', () => {
  axe([<NothingFoundBackground key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NothingFoundBackground {...(attributes as any)} />);
  });
});
