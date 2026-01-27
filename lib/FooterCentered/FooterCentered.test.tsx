import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FooterCentered } from './FooterCentered';

describe('FooterCentered', () => {
  axe([<FooterCentered key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FooterCentered {...(attributes as any)} />);
  });
});
