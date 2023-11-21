import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { GridAsymmetrical } from './GridAsymmetrical';

export default { title: 'GridAsymmetrical' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={GridAsymmetrical} />;
}
