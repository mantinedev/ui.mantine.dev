import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FeaturesGrid } from './FeaturesGrid';

describe('FeaturesGrid', () => {
  axe([<FeaturesGrid key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesGrid {...(attributes as any)} />);
  });
});
