import { axe, render } from '@/test-utils';
import { TableSelection } from './TableSelection';
import attributes from './attributes.json';

describe('TableSelection', () => {
  axe([<TableSelection key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableSelection {...(attributes as any)} />);
  });
});
