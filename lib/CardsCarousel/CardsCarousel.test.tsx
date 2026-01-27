import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { CardsCarousel } from './CardsCarousel';

describe('CardsCarousel', () => {
  axe([<CardsCarousel key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CardsCarousel {...(attributes as any)} />);
  });
});
