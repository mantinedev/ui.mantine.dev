import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ImageCheckboxes } from './ImageCheckboxes';

describe('ImageCheckboxes', () => {
  axe([<ImageCheckboxes key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ImageCheckboxes {...(attributes as any)} />);
  });
});
