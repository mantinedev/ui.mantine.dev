import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ServerError } from './ServerError';

export default { title: 'ServerError' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ServerError} />;
}
