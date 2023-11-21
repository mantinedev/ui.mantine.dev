import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { AutocompleteLoading } from './AutocompleteLoading';

export default { title: 'AutocompleteLoading' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={AutocompleteLoading} />;
}
