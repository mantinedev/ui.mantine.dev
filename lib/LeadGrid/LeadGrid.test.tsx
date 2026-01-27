import { axe, render } from '@/test-utils';
import { LeadGrid } from './LeadGrid';
import attributes from './attributes.json';

describe('LeadGrid', () => {
  axe([<LeadGrid key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<LeadGrid {...(attributes as any)} />);
  });
});
