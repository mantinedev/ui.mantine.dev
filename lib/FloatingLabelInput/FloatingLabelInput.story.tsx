import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { FloatingLabelInput } from './FloatingLabelInput';

export default { title: 'FloatingLabelInput' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FloatingLabelInput} />;
}
