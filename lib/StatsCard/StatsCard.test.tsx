import { axe, render } from '@/test-utils';
import { StatsCard } from './StatsCard';
import attributes from './attributes.json';

describe('StatsCard', () => {
  axe([<StatsCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsCard {...(attributes as any)} />);
  });
});
