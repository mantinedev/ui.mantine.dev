import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticlesCardsGrid } from './ArticlesCardsGrid';
import attributes from './attributes.json';

export default { title: 'ArticlesCardsGrid' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ArticlesCardsGrid} />;
}
