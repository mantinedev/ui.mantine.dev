import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { TaskCard as TaskCardComponent } from './TaskCard';

export default { title: 'TaskCard' };

export function TaskCard() {
  return <StoryWrapper attributes={attributes} component={TaskCardComponent} />;
}
