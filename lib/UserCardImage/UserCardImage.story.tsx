import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { UserCardImage } from './UserCardImage';

export default { title: 'UserCardImage' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={UserCardImage} />;
}
