import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FaqSimple } from './FaqSimple';

describe('FaqSimple', () => {
  axe([<FaqSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FaqSimple {...(attributes as any)} />);
  });
});
