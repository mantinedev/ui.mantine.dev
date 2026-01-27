import { axe, render } from '@/test-utils';
import { HeroImageRight } from './HeroImageRight';
import attributes from './attributes.json';

describe('HeroImageRight', () => {
  axe([<HeroImageRight key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroImageRight {...(attributes as any)} />);
  });
});
