import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { CheckboxCard } from './CheckboxCard';

export default { title: 'CheckboxCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CheckboxCard} />;
}
