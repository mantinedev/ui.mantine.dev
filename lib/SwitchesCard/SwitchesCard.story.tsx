import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { SwitchesCard } from './SwitchesCard';

export default { title: 'SwitchesCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SwitchesCard} />;
}
