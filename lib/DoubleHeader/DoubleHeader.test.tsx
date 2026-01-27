import { axe, render } from '@/test-utils';
import { DoubleHeader } from './DoubleHeader';
import attributes from './attributes.json';

describe('DoubleHeader', () => {
  axe([<DoubleHeader key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DoubleHeader {...(attributes as any)} />);
  });
});
