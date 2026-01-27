import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeroImageRight } from './HeroImageRight';

describe('HeroImageRight', () => {
  axe([<HeroImageRight key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroImageRight {...(attributes as any)} />);
  });
});
