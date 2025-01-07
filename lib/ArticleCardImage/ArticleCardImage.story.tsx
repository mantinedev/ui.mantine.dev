import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticleCardImage } from './ArticleCardImage';
import attributes from './attributes.json';

export default { title: 'ArticleCardImage' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ArticleCardImage} />;
}
