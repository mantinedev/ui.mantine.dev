import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { SliderWhite } from './SliderWhite';

export default { title: 'SliderWhite' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SliderWhite} />;
}
