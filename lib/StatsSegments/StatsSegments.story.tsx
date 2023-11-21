import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { StatsSegments } from './StatsSegments';

export default { title: 'StatsSegments' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={StatsSegments} />;
}
