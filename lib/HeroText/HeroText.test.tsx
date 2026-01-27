import { axe, render } from '@/test-utils';
import { HeroText } from './HeroText';
import attributes from './attributes.json';

describe('HeroText', () => {
  axe([<HeroText key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroText {...(attributes as any)} />);
  });
});
