import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticleCardImage } from './ArticleCardImage';

export default { title: 'ArticleCardImage' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ArticleCardImage} />;
}
