import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeroBullets } from './HeroBullets';

describe('HeroBullets', () => {
  axe([<HeroBullets key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroBullets {...(attributes as any)} />);
  });
});
