import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { NavbarSimpleColored } from './NavbarSimpleColored';

export default { title: 'NavbarSimpleColored' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarSimpleColored} />;
}
