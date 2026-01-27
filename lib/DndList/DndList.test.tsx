import { axe, render } from '@/test-utils';
import { DndList } from './DndList';
import attributes from './attributes.json';

describe('DndList', () => {
  axe([<DndList key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DndList {...(attributes as any)} />);
  });
});
