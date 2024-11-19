import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { DndTable } from './DndTable';

export default { title: 'DndTable' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={DndTable} />;
}
