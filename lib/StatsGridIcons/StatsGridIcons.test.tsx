import { axe, render } from '@/test-utils';
import { StatsGridIcons } from './StatsGridIcons';
import attributes from './attributes.json';

describe('StatsGridIcons', () => {
  axe([<StatsGridIcons key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsGridIcons {...(attributes as any)} />);
  });
});
