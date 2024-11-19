import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { HeroTitle } from './HeroTitle';

export default { title: 'HeroTitle' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeroTitle} />;
}
