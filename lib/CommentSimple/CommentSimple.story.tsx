import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { CommentSimple } from './CommentSimple';

export default { title: 'CommentSimple' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CommentSimple} />;
}
