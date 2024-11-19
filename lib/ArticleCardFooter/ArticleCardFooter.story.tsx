import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticleCardFooter } from './ArticleCardFooter';
import attributes from './attributes.json';

export default { title: 'ArticleCardFooter' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ArticleCardFooter} />;
}
