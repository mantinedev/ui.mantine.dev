import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FeaturesAsymmetrical } from './FeaturesAsymmetrical';

describe('FeaturesAsymmetrical', () => {
  axe([<FeaturesAsymmetrical key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesAsymmetrical {...(attributes as any)} />);
  });
});
