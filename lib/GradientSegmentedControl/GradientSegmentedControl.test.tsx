import { axe, render } from '@/test-utils';
import { GradientSegmentedControl } from './GradientSegmentedControl';
import attributes from './attributes.json';

describe('GradientSegmentedControl', () => {
  axe([<GradientSegmentedControl key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<GradientSegmentedControl {...(attributes as any)} />);
  });
});
