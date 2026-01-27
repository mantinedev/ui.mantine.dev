import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { StatsControls } from './StatsControls';

describe('StatsControls', () => {
  axe([<StatsControls key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<StatsControls {...(attributes as any)} />);
  });
});
