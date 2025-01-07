import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { SliderIcon } from './SliderIcon';

export default { title: 'SliderIcon' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SliderIcon} />;
}
