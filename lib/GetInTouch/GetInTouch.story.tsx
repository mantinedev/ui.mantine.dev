import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { GetInTouch } from './GetInTouch';

export default { title: 'GetInTouch' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={GetInTouch} />;
}
