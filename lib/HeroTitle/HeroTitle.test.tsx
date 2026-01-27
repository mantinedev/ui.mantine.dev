import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeroTitle } from './HeroTitle';

describe('HeroTitle', () => {
  axe([<HeroTitle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroTitle {...(attributes as any)} />);
  });
});
