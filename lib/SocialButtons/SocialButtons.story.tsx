import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { SocialButtons } from './SocialButtons';

export default { title: 'SocialButtons' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SocialButtons} />;
}
