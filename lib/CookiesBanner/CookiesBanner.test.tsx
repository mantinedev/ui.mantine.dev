import { axe, render } from '@/test-utils';
import { CookiesBanner } from './CookiesBanner';
import attributes from './attributes.json';

describe('CookiesBanner', () => {
  axe([<CookiesBanner key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CookiesBanner {...(attributes as any)} />);
  });
});
