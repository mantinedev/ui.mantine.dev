import { axe, render } from '@/test-utils';
import { NotFoundImage } from './NotFoundImage';
import attributes from './attributes.json';

describe('NotFoundImage', () => {
  axe([<NotFoundImage key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NotFoundImage {...(attributes as any)} />);
  });
});
