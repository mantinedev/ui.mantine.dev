import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { Subgrid } from './Subgrid';

describe('Subgrid', () => {
  axe([<Subgrid key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<Subgrid {...(attributes as any)} />);
  });
});
