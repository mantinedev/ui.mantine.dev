import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { CardGradient } from './CardGradient';

export default { title: 'CardGradient' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CardGradient} />;
}
