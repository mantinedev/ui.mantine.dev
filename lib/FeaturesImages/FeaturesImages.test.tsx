import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FeaturesImages } from './FeaturesImages';

describe('FeaturesImages', () => {
  axe([<FeaturesImages key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesImages {...(attributes as any)} />);
  });
});
