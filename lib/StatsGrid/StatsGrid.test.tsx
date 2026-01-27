import { axe, render } from '@/test-utils';
import { StatsGrid } from './StatsGrid';
import attributes from './attributes.json';

describe('StatsGrid', () => {
  axe([<StatsGrid key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsGrid {...(attributes as any)} />);
  });
});
