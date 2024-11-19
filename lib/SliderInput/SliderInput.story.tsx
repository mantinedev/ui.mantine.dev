import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { SliderInput } from './SliderInput';

export default { title: 'SliderInput' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={SliderInput} />;
}
