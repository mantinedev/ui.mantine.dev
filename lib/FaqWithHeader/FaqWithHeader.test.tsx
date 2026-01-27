import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FaqWithHeader } from './FaqWithHeader';

describe('FaqWithHeader', () => {
  axe([<FaqWithHeader key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FaqWithHeader {...(attributes as any)} />);
  });
});
