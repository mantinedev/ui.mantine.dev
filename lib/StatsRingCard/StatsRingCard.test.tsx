import { axe, render } from '@/test-utils';
import { StatsRingCard } from './StatsRingCard';
import attributes from './attributes.json';

describe('StatsRingCard', () => {
  axe([<StatsRingCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsRingCard {...(attributes as any)} />);
  });
});
