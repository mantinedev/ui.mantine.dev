import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { HeaderTabs } from './HeaderTabs';

export default { title: 'HeaderTabs' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeaderTabs} />;
}
