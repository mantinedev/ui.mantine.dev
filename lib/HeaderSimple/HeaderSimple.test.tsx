import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { HeaderSimple } from './HeaderSimple';

describe('HeaderSimple', () => {
  axe([<HeaderSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<HeaderSimple {...(attributes as any)} />);
  });
});
