import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { GetInTouchSimple } from './GetInTouchSimple';

export default { title: 'GetInTouchSimple' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={GetInTouchSimple} />;
}
