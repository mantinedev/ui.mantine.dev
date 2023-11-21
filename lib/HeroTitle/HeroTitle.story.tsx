import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { HeroTitle } from './HeroTitle';

export default { title: 'HeroTitle' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeroTitle} />;
}
