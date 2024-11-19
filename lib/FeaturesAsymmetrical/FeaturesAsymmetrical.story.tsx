import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { FeaturesAsymmetrical } from './FeaturesAsymmetrical';

export default { title: 'FeaturesAsymmetrical' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FeaturesAsymmetrical} />;
}
