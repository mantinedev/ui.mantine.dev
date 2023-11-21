import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FeaturesGrid } from './FeaturesGrid';

export default { title: 'FeaturesGrid' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FeaturesGrid} />;
}
