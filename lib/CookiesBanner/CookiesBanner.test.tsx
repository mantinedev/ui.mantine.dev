import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { CookiesBanner } from './CookiesBanner';

describe('CookiesBanner', () => {
  axe([<CookiesBanner key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CookiesBanner {...(attributes as any)} />);
  });
});
