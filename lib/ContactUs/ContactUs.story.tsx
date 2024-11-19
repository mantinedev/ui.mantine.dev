import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { ContactUs } from './ContactUs';

export default { title: 'ContactUs' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ContactUs} />;
}
