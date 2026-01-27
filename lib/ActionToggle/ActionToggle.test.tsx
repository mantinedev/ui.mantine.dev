import { axe, render } from '@/test-utils';
import { ActionToggle } from './ActionToggle';
import attributes from './attributes.json';

describe('ActionToggle', () => {
  axe([<ActionToggle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ActionToggle {...(attributes as any)} />);
  });
});
