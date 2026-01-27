import { axe, render } from '@/test-utils';
import { FaqSimple } from './FaqSimple';
import attributes from './attributes.json';

describe('FaqSimple', () => {
  axe([<FaqSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FaqSimple {...(attributes as any)} />);
  });
});
