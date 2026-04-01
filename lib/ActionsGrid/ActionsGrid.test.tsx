import { axe, render } from '@/test-utils';
import { ActionsGrid } from './ActionsGrid';

describe('ActionsGrid', () => {
  axe([<ActionsGrid key="1" />]);

  it('renders correctly', () => {
    render(<ActionsGrid />);
  });
});
