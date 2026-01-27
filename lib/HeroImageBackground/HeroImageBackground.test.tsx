import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeroImageBackground } from './HeroImageBackground';

describe('HeroImageBackground', () => {
  axe([<HeroImageBackground key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroImageBackground {...(attributes as any)} />);
  });
});
