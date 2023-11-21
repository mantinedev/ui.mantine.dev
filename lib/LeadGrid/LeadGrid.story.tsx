import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { LeadGrid } from './LeadGrid';

export default { title: 'LeadGrid' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={LeadGrid} />;
}
