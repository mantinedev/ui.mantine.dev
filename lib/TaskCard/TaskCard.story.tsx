import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { TaskCard } from './TaskCard';

export default { title: 'TaskCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={TaskCard} />;
}
