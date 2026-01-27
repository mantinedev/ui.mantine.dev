import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { TableScrollArea } from './TableScrollArea';

describe('TableScrollArea', () => {
  axe([<TableScrollArea key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableScrollArea {...(attributes as any)} />);
  });
});
