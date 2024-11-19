import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { ServerOverload } from './ServerOverload';

export default { title: 'ServerOverload' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ServerOverload} />;
}
