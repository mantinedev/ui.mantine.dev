import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { StatsGridIcons } from './StatsGridIcons';

describe('StatsGridIcons', () => {
  axe([<StatsGridIcons key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsGridIcons {...(attributes as any)} />);
  });
});
