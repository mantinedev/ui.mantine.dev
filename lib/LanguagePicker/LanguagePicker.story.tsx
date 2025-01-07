import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { LanguagePicker } from './LanguagePicker';

export default { title: 'LanguagePicker' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={LanguagePicker} />;
}
