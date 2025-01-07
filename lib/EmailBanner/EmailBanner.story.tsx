import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { EmailBanner } from './EmailBanner';

export default { title: 'EmailBanner' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={EmailBanner} />;
}
