import { axe, render } from '@/test-utils';
import { ArticlesCardsGrid } from './ArticlesCardsGrid';
import attributes from './attributes.json';

describe('ArticlesCardsGrid', () => {
  axe([<ArticlesCardsGrid key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ArticlesCardsGrid {...(attributes as any)} />);
  });
});
