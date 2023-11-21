import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { InputValidation } from './InputValidation';

export default { title: 'InputValidation' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={InputValidation} />;
}
