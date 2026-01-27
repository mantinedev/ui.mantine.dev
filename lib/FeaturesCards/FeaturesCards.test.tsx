import { axe, render } from '@/test-utils';
import { FeaturesCards } from './FeaturesCards';
import attributes from './attributes.json';

describe('FeaturesCards', () => {
  axe([<FeaturesCards key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesCards {...(attributes as any)} />);
  });
});
