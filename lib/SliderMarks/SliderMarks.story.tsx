import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { SliderMarks } from './SliderMarks';

export default { title: 'SliderMarks' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SliderMarks} />;
}
