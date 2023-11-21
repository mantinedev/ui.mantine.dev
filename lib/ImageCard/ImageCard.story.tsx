import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ImageCard } from './ImageCard';

export default { title: 'ImageCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ImageCard} />;
}
