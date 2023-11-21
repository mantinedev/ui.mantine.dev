import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { SplitButton } from './SplitButton';

export default { title: 'SplitButton' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SplitButton} />;
}
