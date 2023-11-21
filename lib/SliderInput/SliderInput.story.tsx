import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { SliderInput } from './SliderInput';

export default { title: 'SliderInput' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SliderInput} />;
}
