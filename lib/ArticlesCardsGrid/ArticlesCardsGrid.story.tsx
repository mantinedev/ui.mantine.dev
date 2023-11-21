import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticlesCardsGrid } from './ArticlesCardsGrid';

export default { title: 'ArticlesCardsGrid' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ArticlesCardsGrid} />;
}
