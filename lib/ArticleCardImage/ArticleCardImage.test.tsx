import { axe, render } from '@/test-utils';
import { ArticleCardImage } from './ArticleCardImage';
import attributes from './attributes.json';

describe('ArticleCardImage', () => {
  axe([<ArticleCardImage key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ArticleCardImage {...(attributes as any)} />);
  });
});
