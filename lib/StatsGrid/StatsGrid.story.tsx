import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { StatsGrid } from './StatsGrid';

export default { title: 'StatsGrid' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={StatsGrid} />;
}
