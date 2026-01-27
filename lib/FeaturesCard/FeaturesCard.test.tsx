import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FeaturesCard } from './FeaturesCard';

describe('FeaturesCard', () => {
  axe([<FeaturesCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FeaturesCard {...(attributes as any)} />);
  });
});
