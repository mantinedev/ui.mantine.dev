import { axe, render } from '@/test-utils';
import { SplitButton } from './SplitButton';
import attributes from './attributes.json';

describe('SplitButton', () => {
  axe([<SplitButton key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SplitButton {...(attributes as any)} />);
  });
});
