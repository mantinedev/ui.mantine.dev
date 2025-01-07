import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { DndListHandle } from './DndListHandle';

export default { title: 'DndListHandle' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={DndListHandle} />;
}
