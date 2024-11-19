import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { HeaderMenu } from './HeaderMenu';

export default { title: 'HeaderMenu' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeaderMenu} />;
}
