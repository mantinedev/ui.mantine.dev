import { axe, render } from '@/test-utils';
import { TableOfContentsFloating } from './TableOfContentsFloating';
import attributes from './attributes.json';

describe('TableOfContentsFloating', () => {
  axe([<TableOfContentsFloating key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableOfContentsFloating {...(attributes as any)} />);
  });
});
