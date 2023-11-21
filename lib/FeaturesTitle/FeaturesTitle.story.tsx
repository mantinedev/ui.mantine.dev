import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FeaturesTitle } from './FeaturesTitle';

export default { title: 'FeaturesTitle' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FeaturesTitle} />;
}
