import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FeaturesTitle } from './FeaturesTitle';

describe('FeaturesTitle', () => {
  axe([<FeaturesTitle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesTitle {...(attributes as any)} />);
  });
});
