import { axe, render } from '@/test-utils';
import { HeroImageBackground } from './HeroImageBackground';
import attributes from './attributes.json';

describe('HeroImageBackground', () => {
  axe([<HeroImageBackground key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroImageBackground {...(attributes as any)} />);
  });
});
