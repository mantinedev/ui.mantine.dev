import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ContainedInputs } from './ContainedInputs';

export default { title: 'ContainedInputs' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ContainedInputs} />;
}
