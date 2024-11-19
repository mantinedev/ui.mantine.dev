import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { ProgressCard } from './ProgressCard';

export default { title: 'ProgressCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ProgressCard} />;
}
