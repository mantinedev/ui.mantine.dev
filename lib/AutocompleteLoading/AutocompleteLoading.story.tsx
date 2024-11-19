import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { AutocompleteLoading } from './AutocompleteLoading';

export default { title: 'AutocompleteLoading' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={AutocompleteLoading} />;
}
