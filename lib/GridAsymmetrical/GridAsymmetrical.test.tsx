import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { GridAsymmetrical } from './GridAsymmetrical';

describe('GridAsymmetrical', () => {
  axe([<GridAsymmetrical key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<GridAsymmetrical {...(attributes as any)} />);
  });
});
