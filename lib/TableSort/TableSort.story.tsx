import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { TableSort } from './TableSort';

export default { title: 'TableSort' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={TableSort} />;
}
