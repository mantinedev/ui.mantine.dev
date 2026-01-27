import { axe, render } from '@/test-utils';
import { CardsCarousel } from './CardsCarousel';
import attributes from './attributes.json';

describe('CardsCarousel', () => {
  axe([<CardsCarousel key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CardsCarousel {...(attributes as any)} />);
  });
});
