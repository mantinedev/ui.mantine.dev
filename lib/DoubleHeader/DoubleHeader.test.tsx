import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { DoubleHeader } from './DoubleHeader';

describe('DoubleHeader', () => {
  axe([<DoubleHeader key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DoubleHeader {...(attributes as any)} />);
  });
});
