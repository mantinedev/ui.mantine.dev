import { axe, render } from '@/test-utils';
import { DoubleNavbar } from './DoubleNavbar';
import attributes from './attributes.json';

describe('DoubleNavbar', () => {
  axe([<DoubleNavbar key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DoubleNavbar {...(attributes as any)} />);
  });
});
