import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { BadgeCard } from './BadgeCard';

export default { title: 'BadgeCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={BadgeCard} />;
}
