import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { InputTooltip } from './InputTooltip';

describe('InputTooltip', () => {
  axe([<InputTooltip key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<InputTooltip {...(attributes as any)} />);
  });
});
