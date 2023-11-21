import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { NavbarSearch } from './NavbarSearch';

export default { title: 'NavbarSearch' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarSearch} />;
}
