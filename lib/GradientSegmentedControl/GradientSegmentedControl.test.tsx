import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { GradientSegmentedControl } from './GradientSegmentedControl';

describe('GradientSegmentedControl', () => {
  axe([<GradientSegmentedControl key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<GradientSegmentedControl {...(attributes as any)} />);
  });
});
