import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { GradientSegmentedControl } from './GradientSegmentedControl';

export default { title: 'GradientSegmentedControl' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={GradientSegmentedControl} />;
}
