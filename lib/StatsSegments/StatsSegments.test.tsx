import { axe, render } from '@/test-utils';
import { StatsSegments } from './StatsSegments';
import attributes from './attributes.json';

describe('StatsSegments', () => {
  axe([<StatsSegments key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsSegments {...(attributes as any)} />);
  });
});
