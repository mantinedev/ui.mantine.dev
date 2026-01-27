import { axe, render } from '@/test-utils';
import { ArticleCard } from './ArticleCard';
import attributes from './attributes.json';

describe('ArticleCard', () => {
  axe([<ArticleCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ArticleCard {...(attributes as any)} />);
  });
});
