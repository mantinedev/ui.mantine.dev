import { axe, render } from '@/test-utils';
import { TableOfContents } from './TableOfContents';
import attributes from './attributes.json';

describe('TableOfContents', () => {
  axe([<TableOfContents key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableOfContents {...(attributes as any)} />);
  });
});
