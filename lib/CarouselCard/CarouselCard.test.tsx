import { axe, render } from '@/test-utils';
import { CarouselCard } from './CarouselCard';
import attributes from './attributes.json';

describe('CarouselCard', () => {
  axe([<CarouselCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CarouselCard {...(attributes as any)} />);
  });
});
