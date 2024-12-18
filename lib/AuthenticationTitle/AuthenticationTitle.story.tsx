import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { AuthenticationTitle } from './AuthenticationTitle';

export default { title: 'AuthenticationTitle' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={AuthenticationTitle} />;
}
