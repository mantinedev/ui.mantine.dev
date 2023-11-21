import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { TableScrollArea } from './TableScrollArea';

export default { title: 'TableScrollArea' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={TableScrollArea} />;
}
