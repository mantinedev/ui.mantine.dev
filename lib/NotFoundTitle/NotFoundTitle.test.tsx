import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NotFoundTitle } from './NotFoundTitle';

describe('NotFoundTitle', () => {
  axe([<NotFoundTitle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NotFoundTitle {...(attributes as any)} />);
  });
});
