import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { StatsRing } from './StatsRing';

describe('StatsRing', () => {
  axe([<StatsRing key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsRing {...(attributes as any)} />);
  });
});
