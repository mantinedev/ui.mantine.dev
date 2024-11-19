import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ActionsGrid } from './ActionsGrid';
import attributes from './attributes.json';

export default { title: 'ActionsGrid' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ActionsGrid} />;
}
