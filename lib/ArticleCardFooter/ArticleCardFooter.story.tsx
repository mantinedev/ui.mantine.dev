import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticleCardFooter } from './ArticleCardFooter';

export default { title: 'ArticleCardFooter' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ArticleCardFooter} />;
}
