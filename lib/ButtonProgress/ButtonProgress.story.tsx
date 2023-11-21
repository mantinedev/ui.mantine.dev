import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ButtonProgress } from './ButtonProgress';

export default { title: 'ButtonProgress' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ButtonProgress} />;
}
