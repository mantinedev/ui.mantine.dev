import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { AuthenticationImage } from './AuthenticationImage';

export default { title: 'AuthenticationImage' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={AuthenticationImage} />;
}
