import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ImageActionBanner } from './ImageActionBanner';

describe('ImageActionBanner', () => {
  axe([<ImageActionBanner key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ImageActionBanner {...(attributes as any)} />);
  });
});
