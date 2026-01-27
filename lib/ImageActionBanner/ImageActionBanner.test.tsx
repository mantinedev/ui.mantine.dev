import { axe, render } from '@/test-utils';
import { ImageActionBanner } from './ImageActionBanner';
import attributes from './attributes.json';

describe('ImageActionBanner', () => {
  axe([<ImageActionBanner key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ImageActionBanner {...(attributes as any)} />);
  });
});
