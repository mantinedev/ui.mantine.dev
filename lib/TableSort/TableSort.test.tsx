import { axe, render } from '@/test-utils';
import { TableSort } from './TableSort';
import attributes from './attributes.json';

describe('TableSort', () => {
  axe([<TableSort key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableSort {...(attributes as any)} />);
  });
});
