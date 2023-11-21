import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { UserInfoIcons } from './UserInfoIcons';

export default { title: 'UserInfoIcons' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={UserInfoIcons} />;
}
