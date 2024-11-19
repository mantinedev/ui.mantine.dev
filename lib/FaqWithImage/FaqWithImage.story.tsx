import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { FaqWithImage } from './FaqWithImage';

export default { title: 'FaqWithImage' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FaqWithImage} />;
}
