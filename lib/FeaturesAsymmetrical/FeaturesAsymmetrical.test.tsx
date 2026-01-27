import { axe, render } from '@/test-utils';
import { FeaturesAsymmetrical } from './FeaturesAsymmetrical';
import attributes from './attributes.json';

describe('FeaturesAsymmetrical', () => {
  axe([<FeaturesAsymmetrical key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesAsymmetrical {...(attributes as any)} />);
  });
});
