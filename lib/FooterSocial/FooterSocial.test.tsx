import { axe, render } from '@/test-utils';
import { FooterSocial } from './FooterSocial';
import attributes from './attributes.json';

describe('FooterSocial', () => {
  axe([<FooterSocial key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FooterSocial {...(attributes as any)} />);
  });
});
