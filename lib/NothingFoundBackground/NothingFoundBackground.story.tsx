import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { NothingFoundBackground } from './NothingFoundBackground';

export default { title: 'NothingFoundBackground' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NothingFoundBackground} />;
}
