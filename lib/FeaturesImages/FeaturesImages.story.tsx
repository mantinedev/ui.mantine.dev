import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FeaturesImages } from './FeaturesImages';

export default { title: 'FeaturesImages' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FeaturesImages} />;
}
