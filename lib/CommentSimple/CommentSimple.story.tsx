import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { CommentSimple } from './CommentSimple';

export default { title: 'CommentSimple' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CommentSimple} />;
}
