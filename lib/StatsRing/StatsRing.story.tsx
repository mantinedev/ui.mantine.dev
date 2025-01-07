import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { StatsRing } from './StatsRing';

export default { title: 'StatsRing' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={StatsRing} />;
}
