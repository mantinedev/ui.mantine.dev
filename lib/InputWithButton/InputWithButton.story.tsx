import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { InputWithButton } from './InputWithButton';

export default { title: 'InputWithButton' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={InputWithButton} />;
}
