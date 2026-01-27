import { axe, render } from '@/test-utils';
import { HeaderTabs } from './HeaderTabs';
import attributes from './attributes.json';

describe('HeaderTabs', () => {
  axe([<HeaderTabs key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeaderTabs {...(attributes as any)} />);
  });
});
