import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeroContentLeft } from './HeroContentLeft';

describe('HeroContentLeft', () => {
  axe([<HeroContentLeft key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroContentLeft {...(attributes as any)} />);
  });
});
