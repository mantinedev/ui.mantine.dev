import { axe, render } from '@/test-utils';
import { ActionsGrid } from './ActionsGrid';

describe('ActionsGrid', () => {
  axe([<ActionsGrid />]);

  it('renders correctly', () => {
    render(<ActionsGrid />);
  });
});
