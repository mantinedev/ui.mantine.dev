import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { StatsGrid } from './StatsGrid';

describe('StatsGrid', () => {
  axe([<StatsGrid key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsGrid {...(attributes as any)} />);
  });
});
