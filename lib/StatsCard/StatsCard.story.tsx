import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { StatsCard } from './StatsCard';

export default { title: 'StatsCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={StatsCard} />;
}
