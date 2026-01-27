import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { TableOfContents } from './TableOfContents';

describe('TableOfContents', () => {
  axe([<TableOfContents key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableOfContents {...(attributes as any)} />);
  });
});
