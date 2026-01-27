import { axe, render } from '@/test-utils';
import { ArticleCardFooter } from './ArticleCardFooter';
import attributes from './attributes.json';

describe('ArticleCardFooter', () => {
  axe([<ArticleCardFooter key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ArticleCardFooter {...(attributes as any)} />);
  });
});
