import { axe, render } from '@/test-utils';
import { FeaturesCard } from './FeaturesCard';
import attributes from './attributes.json';

describe('FeaturesCard', () => {
  axe([<FeaturesCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesCard {...(attributes as any)} />);
  });
});
