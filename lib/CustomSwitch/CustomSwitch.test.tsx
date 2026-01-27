import { axe, render } from '@/test-utils';
import { CustomSwitch } from './CustomSwitch';
import attributes from './attributes.json';

describe('CustomSwitch', () => {
  axe([<CustomSwitch key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CustomSwitch {...(attributes as any)} />);
  });
});
