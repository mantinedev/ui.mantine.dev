import { axe, render } from '@/test-utils';
import { ArticleCardVertical } from './ArticleCardVertical';
import attributes from './attributes.json';

describe('ArticleCardVertical', () => {
  axe([<ArticleCardVertical key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ArticleCardVertical {...(attributes as any)} />);
  });
});
