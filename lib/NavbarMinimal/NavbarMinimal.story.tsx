import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { NavbarMinimal } from './NavbarMinimal';

export default { title: 'NavbarMinimal' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarMinimal} />;
}
