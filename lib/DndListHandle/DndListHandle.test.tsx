import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { DndListHandle } from './DndListHandle';

describe('DndListHandle', () => {
  axe([<DndListHandle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DndListHandle {...(attributes as any)} />);
  });
});
