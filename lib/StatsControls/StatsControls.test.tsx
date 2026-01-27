import { axe, render } from '@/test-utils';
import { StatsControls } from './StatsControls';
import attributes from './attributes.json';

describe('StatsControls', () => {
  axe([<StatsControls key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsControls {...(attributes as any)} />);
  });
});
