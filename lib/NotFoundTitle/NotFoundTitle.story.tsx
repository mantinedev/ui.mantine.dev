import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { NotFoundTitle } from './NotFoundTitle';

export default { title: 'NotFoundTitle' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NotFoundTitle} />;
}
