import { axe, render } from '@/test-utils';
import { FeaturesTitle } from './FeaturesTitle';
import attributes from './attributes.json';

describe('FeaturesTitle', () => {
  axe([<FeaturesTitle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesTitle {...(attributes as any)} />);
  });
});
