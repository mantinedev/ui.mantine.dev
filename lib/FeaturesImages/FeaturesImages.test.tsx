import { axe, render } from '@/test-utils';
import { FeaturesImages } from './FeaturesImages';
import attributes from './attributes.json';

describe('FeaturesImages', () => {
  axe([<FeaturesImages key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesImages {...(attributes as any)} />);
  });
});
