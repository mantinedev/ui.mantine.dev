import { axe, render } from '@/test-utils';
import { GridAsymmetrical } from './GridAsymmetrical';
import attributes from './attributes.json';

describe('GridAsymmetrical', () => {
  axe([<GridAsymmetrical key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<GridAsymmetrical {...(attributes as any)} />);
  });
});
