import { axe, render } from '@/test-utils';
import { NotFoundTitle } from './NotFoundTitle';
import attributes from './attributes.json';

describe('NotFoundTitle', () => {
  axe([<NotFoundTitle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NotFoundTitle {...(attributes as any)} />);
  });
});
