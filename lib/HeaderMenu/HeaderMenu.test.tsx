import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeaderMenu } from './HeaderMenu';

describe('HeaderMenu', () => {
  axe([<HeaderMenu key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeaderMenu {...(attributes as any)} />);
  });
});
