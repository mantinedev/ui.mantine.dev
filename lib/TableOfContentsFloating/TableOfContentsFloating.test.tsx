import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { TableOfContentsFloating } from './TableOfContentsFloating';

describe('TableOfContentsFloating', () => {
  axe([<TableOfContentsFloating key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableOfContentsFloating {...(attributes as any)} />);
  });
});
