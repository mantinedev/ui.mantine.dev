import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FeaturesCard } from './FeaturesCard';

export default { title: 'FeaturesCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FeaturesCard} />;
}
