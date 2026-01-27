import { axe, render } from '@/test-utils';
import { FaqWithImage } from './FaqWithImage';
import attributes from './attributes.json';

describe('FaqWithImage', () => {
  axe([<FaqWithImage key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FaqWithImage {...(attributes as any)} />);
  });
});
