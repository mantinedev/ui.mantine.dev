import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ImageCheckboxes } from './ImageCheckboxes';

export default { title: 'ImageCheckboxes' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ImageCheckboxes} />;
}
