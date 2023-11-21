import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ProgressCardColored } from './ProgressCardColored';

export default { title: 'ProgressCardColored' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ProgressCardColored} />;
}
