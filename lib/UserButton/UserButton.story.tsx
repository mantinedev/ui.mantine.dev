import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { UserButton } from './UserButton';

export default { title: 'UserButton' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={UserButton} />;
}
