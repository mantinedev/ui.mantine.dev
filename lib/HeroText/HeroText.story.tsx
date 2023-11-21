import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { HeroText } from './HeroText';

export default { title: 'HeroText' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeroText} />;
}
