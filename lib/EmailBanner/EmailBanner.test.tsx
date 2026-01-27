import { axe, render } from '@/test-utils';
import { EmailBanner } from './EmailBanner';
import attributes from './attributes.json';

describe('EmailBanner', () => {
  axe([<EmailBanner key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<EmailBanner {...(attributes as any)} />);
  });
});
