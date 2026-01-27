import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { LeadGrid } from './LeadGrid';

describe('LeadGrid', () => {
  axe([<LeadGrid key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<LeadGrid {...(attributes as any)} />);
  });
});
