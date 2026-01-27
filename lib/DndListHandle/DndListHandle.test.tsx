import { axe, render } from '@/test-utils';
import { DndListHandle } from './DndListHandle';
import attributes from './attributes.json';

describe('DndListHandle', () => {
  axe([<DndListHandle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DndListHandle {...(attributes as any)} />);
  });
});
