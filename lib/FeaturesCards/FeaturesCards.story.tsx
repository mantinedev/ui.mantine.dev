import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FeaturesCards } from './FeaturesCards';

export default { title: 'FeaturesCards' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FeaturesCards} />;
}
