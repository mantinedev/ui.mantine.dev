import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { StatsCard } from './StatsCard';

describe('StatsCard', () => {
  axe([<StatsCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsCard {...(attributes as any)} />);
  });
});
