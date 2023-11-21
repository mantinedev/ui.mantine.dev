import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { HeroContentLeft } from './HeroContentLeft';

export default { title: 'HeroContentLeft' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeroContentLeft} />;
}
