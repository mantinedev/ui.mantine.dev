import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { DropzoneButton } from './DropzoneButton';

export default { title: 'DropzoneButton' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={DropzoneButton} />;
}
