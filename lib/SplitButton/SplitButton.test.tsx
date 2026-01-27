import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { SplitButton } from './SplitButton';

describe('SplitButton', () => {
  axe([<SplitButton key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SplitButton {...(attributes as any)} />);
  });
});
