import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { TableSort } from './TableSort';

describe('TableSort', () => {
  axe([<TableSort key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableSort {...(attributes as any)} />);
  });
});
