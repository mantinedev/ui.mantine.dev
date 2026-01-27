import { axe, render } from '@/test-utils';
import { StatsRing } from './StatsRing';
import attributes from './attributes.json';

describe('StatsRing', () => {
  axe([<StatsRing key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsRing {...(attributes as any)} />);
  });
});
