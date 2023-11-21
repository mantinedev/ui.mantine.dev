import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { UsersStack } from './UsersStack';

export default { title: 'UsersStack' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={UsersStack} />;
}
