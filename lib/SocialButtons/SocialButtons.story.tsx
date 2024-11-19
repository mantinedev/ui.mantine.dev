import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { SocialButtons } from './SocialButtons';

export default { title: 'SocialButtons' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SocialButtons} />;
}
