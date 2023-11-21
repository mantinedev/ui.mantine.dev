import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ForgotPassword } from './ForgotPassword';

export default { title: 'ForgotPassword' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ForgotPassword} />;
}
