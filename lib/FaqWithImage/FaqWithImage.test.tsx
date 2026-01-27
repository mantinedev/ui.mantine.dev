import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FaqWithImage } from './FaqWithImage';

describe('FaqWithImage', () => {
  axe([<FaqWithImage key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FaqWithImage {...(attributes as any)} />);
  });
});
