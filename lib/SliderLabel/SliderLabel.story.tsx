import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { SliderLabel } from './SliderLabel';

export default { title: 'SliderLabel' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SliderLabel} />;
}
