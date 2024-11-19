import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { NavbarSearch } from './NavbarSearch';

export default { title: 'NavbarSearch' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarSearch} />;
}
