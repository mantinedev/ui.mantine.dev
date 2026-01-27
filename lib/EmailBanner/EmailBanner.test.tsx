import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { EmailBanner } from './EmailBanner';

describe('EmailBanner', () => {
  axe([<EmailBanner key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<EmailBanner {...(attributes as any)} />);
  });
});
