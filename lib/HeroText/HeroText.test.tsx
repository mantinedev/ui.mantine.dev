import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeroText } from './HeroText';

describe('HeroText', () => {
  axe([<HeroText key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroText {...(attributes as any)} />);
  });
});
