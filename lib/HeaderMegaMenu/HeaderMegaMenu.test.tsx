import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeaderMegaMenu } from './HeaderMegaMenu';

describe('HeaderMegaMenu', () => {
  axe([<HeaderMegaMenu key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeaderMegaMenu {...(attributes as any)} />);
  });
});
