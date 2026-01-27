import { axe, render } from '@/test-utils';
import { HeaderMegaMenu } from './HeaderMegaMenu';
import attributes from './attributes.json';

describe('HeaderMegaMenu', () => {
  axe([<HeaderMegaMenu key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeaderMegaMenu {...(attributes as any)} />);
  });
});
