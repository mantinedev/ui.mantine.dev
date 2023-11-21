import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ForgotPasswordInput } from './ForgotPasswordInput';

export default { title: 'ForgotPasswordInput' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ForgotPasswordInput} />;
}
