import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ActionToggle } from './ActionToggle';
import attributes from './attributes.json';

export default { title: 'ActionToggle' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ActionToggle} />;
}
