import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FooterLinks } from './FooterLinks';

describe('FooterLinks', () => {
  axe([<FooterLinks key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FooterLinks {...(attributes as any)} />);
  });
});
