import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { NavbarSimple } from './NavbarSimple';

export default { title: 'NavbarSimple' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarSimple} />;
}
