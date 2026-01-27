import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NotFoundImage } from './NotFoundImage';

describe('NotFoundImage', () => {
  axe([<NotFoundImage key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NotFoundImage {...(attributes as any)} />);
  });
});
