import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { StatsGroup } from './StatsGroup';

export default { title: 'StatsGroup' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={StatsGroup} />;
}
