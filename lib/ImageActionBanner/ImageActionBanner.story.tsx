import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ImageActionBanner } from './ImageActionBanner';

export default { title: 'ImageActionBanner' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ImageActionBanner} />;
}
