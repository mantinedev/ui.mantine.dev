import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { SliderHover } from './SliderHover';

export default { title: 'SliderHover' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SliderHover} />;
}
