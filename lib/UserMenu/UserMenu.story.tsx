import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { UserMenu } from './UserMenu';

export default { title: 'UserMenu' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={UserMenu} />;
}
