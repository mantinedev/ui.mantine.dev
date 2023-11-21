import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { NavbarSimple } from './NavbarSimple';

export default { title: 'NavbarSimple' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarSimple} />;
}
