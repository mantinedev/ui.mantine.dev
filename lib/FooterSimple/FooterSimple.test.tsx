import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FooterSimple } from './FooterSimple';

describe('FooterSimple', () => {
  axe([<FooterSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FooterSimple {...(attributes as any)} />);
  });
});
