import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { StatsRingCard } from './StatsRingCard';

describe('StatsRingCard', () => {
  axe([<StatsRingCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsRingCard {...(attributes as any)} />);
  });
});
