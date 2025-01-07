import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { CookiesBanner } from './CookiesBanner';

export default { title: 'CookiesBanner' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CookiesBanner} />;
}
