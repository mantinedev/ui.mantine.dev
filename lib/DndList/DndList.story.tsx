import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { DndList } from './DndList';

export default { title: 'DndList' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={DndList} />;
}
