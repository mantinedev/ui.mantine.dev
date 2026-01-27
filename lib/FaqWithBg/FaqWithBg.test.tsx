import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FaqWithBg } from './FaqWithBg';

describe('FaqWithBg', () => {
  axe([<FaqWithBg key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FaqWithBg {...(attributes as any)} />);
  });
});
