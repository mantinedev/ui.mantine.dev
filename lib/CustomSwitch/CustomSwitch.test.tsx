import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { CustomSwitch } from './CustomSwitch';

describe('CustomSwitch', () => {
  axe([<CustomSwitch key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CustomSwitch {...(attributes as any)} />);
  });
});
