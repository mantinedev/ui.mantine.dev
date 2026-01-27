import { axe, render } from '@/test-utils';
import { FooterSimple } from './FooterSimple';
import attributes from './attributes.json';

describe('FooterSimple', () => {
  axe([<FooterSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FooterSimple {...(attributes as any)} />);
  });
});
