import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticleCardVertical } from './ArticleCardVertical';
import attributes from './attributes.json';

export default { title: 'ArticleCardVertical' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ArticleCardVertical} />;
}
