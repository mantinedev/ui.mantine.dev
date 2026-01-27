import { axe, render } from '@/test-utils';
import { FaqWithHeader } from './FaqWithHeader';
import attributes from './attributes.json';

describe('FaqWithHeader', () => {
  axe([<FaqWithHeader key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FaqWithHeader {...(attributes as any)} />);
  });
});
