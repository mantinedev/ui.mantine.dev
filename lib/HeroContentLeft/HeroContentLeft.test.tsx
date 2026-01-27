import { axe, render } from '@/test-utils';
import { HeroContentLeft } from './HeroContentLeft';
import attributes from './attributes.json';

describe('HeroContentLeft', () => {
  axe([<HeroContentLeft key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroContentLeft {...(attributes as any)} />);
  });
});
