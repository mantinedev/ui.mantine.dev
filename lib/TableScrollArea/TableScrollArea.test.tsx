import { axe, render } from '@/test-utils';
import { TableScrollArea } from './TableScrollArea';
import attributes from './attributes.json';

describe('TableScrollArea', () => {
  axe([<TableScrollArea key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableScrollArea {...(attributes as any)} />);
  });
});
