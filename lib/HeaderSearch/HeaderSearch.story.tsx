import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { HeaderSearch } from './HeaderSearch';

export default { title: 'HeaderSearch' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeaderSearch} />;
}
