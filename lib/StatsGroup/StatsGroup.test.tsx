import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { StatsGroup } from './StatsGroup';

describe('StatsGroup', () => {
  axe([<StatsGroup key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsGroup {...(attributes as any)} />);
  });
});
