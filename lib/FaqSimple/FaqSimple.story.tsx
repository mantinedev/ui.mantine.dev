import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { FaqSimple } from './FaqSimple';

export default { title: 'FaqSimple' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FaqSimple} />;
}
