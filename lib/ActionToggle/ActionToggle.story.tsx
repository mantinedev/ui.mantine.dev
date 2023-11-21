import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ActionToggle } from './ActionToggle';

export default { title: 'ActionToggle' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ActionToggle} />;
}
