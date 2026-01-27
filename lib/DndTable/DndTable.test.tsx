import { axe, render } from '@/test-utils';
import { DndTable } from './DndTable';
import attributes from './attributes.json';

describe('DndTable', () => {
  axe([<DndTable key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DndTable {...(attributes as any)} />);
  });
});
