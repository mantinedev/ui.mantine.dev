import { axe, render } from '@/test-utils';
import { InputTooltip } from './InputTooltip';
import attributes from './attributes.json';

describe('InputTooltip', () => {
  axe([<InputTooltip key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<InputTooltip {...(attributes as any)} />);
  });
});
