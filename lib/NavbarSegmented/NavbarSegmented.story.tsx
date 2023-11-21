import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { NavbarSegmented } from './NavbarSegmented';

export default { title: 'NavbarSegmented' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarSegmented} />;
}
