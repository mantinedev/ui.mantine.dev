import { axe, render } from '@/test-utils';
import { ImageCheckboxes } from './ImageCheckboxes';
import attributes from './attributes.json';

describe('ImageCheckboxes', () => {
  axe([<ImageCheckboxes key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ImageCheckboxes {...(attributes as any)} />);
  });
});
