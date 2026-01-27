import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { TableSelection } from './TableSelection';

describe('TableSelection', () => {
  axe([<TableSelection key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableSelection {...(attributes as any)} />);
  });
});
