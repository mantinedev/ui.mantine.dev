import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FeaturesCards } from './FeaturesCards';

describe('FeaturesCards', () => {
  axe([<FeaturesCards key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesCards {...(attributes as any)} />);
  });
});
