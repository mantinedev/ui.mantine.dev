import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { HeaderSimple } from './HeaderSimple';

export default { title: 'HeaderSimple' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeaderSimple} />;
}
