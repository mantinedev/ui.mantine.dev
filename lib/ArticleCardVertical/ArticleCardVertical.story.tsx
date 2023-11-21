import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticleCardVertical } from './ArticleCardVertical';

export default { title: 'ArticleCardVertical' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ArticleCardVertical} />;
}
