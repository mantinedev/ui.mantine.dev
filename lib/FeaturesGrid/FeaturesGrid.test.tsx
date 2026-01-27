import { axe, render } from '@/test-utils';
import { FeaturesGrid } from './FeaturesGrid';
import attributes from './attributes.json';

describe('FeaturesGrid', () => {
  axe([<FeaturesGrid key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesGrid {...(attributes as any)} />);
  });
});
