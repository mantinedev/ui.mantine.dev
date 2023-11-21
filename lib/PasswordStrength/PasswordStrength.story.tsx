import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { PasswordStrength } from './PasswordStrength';

export default { title: 'PasswordStrength' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={PasswordStrength} />;
}
