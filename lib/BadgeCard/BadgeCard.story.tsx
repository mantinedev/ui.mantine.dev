import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { BadgeCard } from './BadgeCard';

export default { title: 'BadgeCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={BadgeCard} />;
}
