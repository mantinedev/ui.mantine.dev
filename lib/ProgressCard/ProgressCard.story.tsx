import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ProgressCard } from './ProgressCard';

export default { title: 'ProgressCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ProgressCard} />;
}
