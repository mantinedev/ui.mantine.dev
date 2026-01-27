import { axe, render } from '@/test-utils';
import { HeaderSimple } from './HeaderSimple';
import attributes from './attributes.json';

describe('HeaderSimple', () => {
  axe([<HeaderSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeaderSimple {...(attributes as any)} />);
  });
});
