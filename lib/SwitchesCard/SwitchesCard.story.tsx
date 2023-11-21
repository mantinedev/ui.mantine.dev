import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { SwitchesCard } from './SwitchesCard';

export default { title: 'SwitchesCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SwitchesCard} />;
}
