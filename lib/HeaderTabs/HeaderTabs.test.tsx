import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeaderTabs } from './HeaderTabs';

describe('HeaderTabs', () => {
  axe([<HeaderTabs key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeaderTabs {...(attributes as any)} />);
  });
});
