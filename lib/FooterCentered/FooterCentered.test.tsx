import { axe, render } from '@/test-utils';
import { FooterCentered } from './FooterCentered';
import attributes from './attributes.json';

describe('FooterCentered', () => {
  axe([<FooterCentered key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FooterCentered {...(attributes as any)} />);
  });
});
