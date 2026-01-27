import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { StatsSegments } from './StatsSegments';

describe('StatsSegments', () => {
  axe([<StatsSegments key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsSegments {...(attributes as any)} />);
  });
});
