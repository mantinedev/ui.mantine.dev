import { axe, render } from '@/test-utils';
import { StatsGroup } from './StatsGroup';
import attributes from './attributes.json';

describe('StatsGroup', () => {
  axe([<StatsGroup key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsGroup {...(attributes as any)} />);
  });
});
