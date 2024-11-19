import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticleCard } from './ArticleCard';
import attributes from './attributes.json';

export default { title: 'ArticleCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ArticleCard} />;
}
