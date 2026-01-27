import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { DndTable } from './DndTable';

describe('DndTable', () => {
  axe([<DndTable key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DndTable {...(attributes as any)} />);
  });
});
