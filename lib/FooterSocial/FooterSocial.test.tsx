import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FooterSocial } from './FooterSocial';

describe('FooterSocial', () => {
  axe([<FooterSocial key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FooterSocial {...(attributes as any)} />);
  });
});
