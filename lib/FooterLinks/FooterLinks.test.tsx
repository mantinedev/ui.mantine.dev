import { axe, render } from '@/test-utils';
import { FooterLinks } from './FooterLinks';
import attributes from './attributes.json';

describe('FooterLinks', () => {
  axe([<FooterLinks key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FooterLinks {...(attributes as any)} />);
  });
});
