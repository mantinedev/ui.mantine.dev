import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { HeroImageBackground } from './HeroImageBackground';

export default { title: 'HeroImageBackground' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeroImageBackground} />;
}
