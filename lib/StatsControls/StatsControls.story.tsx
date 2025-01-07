import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { StatsControls } from './StatsControls';

export default { title: 'StatsControls' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={StatsControls} />;
}
