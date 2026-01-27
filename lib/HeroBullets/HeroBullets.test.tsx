import { axe, render } from '@/test-utils';
import { HeroBullets } from './HeroBullets';
import attributes from './attributes.json';

describe('HeroBullets', () => {
  axe([<HeroBullets key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeroBullets {...(attributes as any)} />);
  });
});
