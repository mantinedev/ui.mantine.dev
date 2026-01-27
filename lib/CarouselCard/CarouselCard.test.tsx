import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { CarouselCard } from './CarouselCard';

describe('CarouselCard', () => {
  axe([<CarouselCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CarouselCard {...(attributes as any)} />);
  });
});
