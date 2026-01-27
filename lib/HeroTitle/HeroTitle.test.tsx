import { axe, render } from '@/test-utils';
import { HeroTitle } from './HeroTitle';
import attributes from './attributes.json';

describe('HeroTitle', () => {
  axe([<HeroTitle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroTitle {...(attributes as any)} />);
  });
});
