import { axe, render } from '@/test-utils';
import { FaqWithBg } from './FaqWithBg';
import attributes from './attributes.json';

describe('FaqWithBg', () => {
  axe([<FaqWithBg key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FaqWithBg {...(attributes as any)} />);
  });
});
