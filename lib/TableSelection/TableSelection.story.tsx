import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { TableSelection } from './TableSelection';

export default { title: 'TableSelection' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={TableSelection} />;
}
