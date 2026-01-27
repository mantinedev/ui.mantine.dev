import { axe, render } from '@/test-utils';
import { HeaderMenu } from './HeaderMenu';
import attributes from './attributes.json';

describe('HeaderMenu', () => {
  axe([<HeaderMenu key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeaderMenu {...(attributes as any)} />);
  });
});
