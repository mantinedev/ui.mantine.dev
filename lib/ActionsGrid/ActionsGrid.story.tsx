import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ActionsGrid } from './ActionsGrid';

export default { title: 'ActionsGrid' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ActionsGrid} />;
}
