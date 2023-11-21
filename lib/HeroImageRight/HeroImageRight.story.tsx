import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { HeroImageRight } from './HeroImageRight';

export default { title: 'HeroImageRight' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeroImageRight} />;
}
