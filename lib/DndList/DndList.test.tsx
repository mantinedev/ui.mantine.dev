import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { DndList } from './DndList';

describe('DndList', () => {
  axe([<DndList key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DndList {...(attributes as any)} />);
  });
});
