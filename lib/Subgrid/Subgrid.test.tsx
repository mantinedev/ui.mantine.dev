import { axe, render } from '@/test-utils';
import { Subgrid } from './Subgrid';
import attributes from './attributes.json';

describe('Subgrid', () => {
  axe([<Subgrid key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<Subgrid {...(attributes as any)} />);
  });
});
