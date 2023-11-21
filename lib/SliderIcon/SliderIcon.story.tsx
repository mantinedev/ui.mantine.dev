import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { SliderIcon } from './SliderIcon';

export default { title: 'SliderIcon' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SliderIcon} />;
}
