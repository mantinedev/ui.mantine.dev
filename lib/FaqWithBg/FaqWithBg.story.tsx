import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FaqWithBg } from './FaqWithBg';

export default { title: 'FaqWithBg' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FaqWithBg} />;
}
