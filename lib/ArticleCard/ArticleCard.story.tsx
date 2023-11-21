import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticleCard } from './ArticleCard';

export default { title: 'ArticleCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ArticleCard} />;
}
