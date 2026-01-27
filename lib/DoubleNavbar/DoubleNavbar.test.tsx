import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { DoubleNavbar } from './DoubleNavbar';

describe('DoubleNavbar', () => {
  axe([<DoubleNavbar key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DoubleNavbar {...(attributes as any)} />);
  });
});
