import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { CarouselCard } from './CarouselCard';

export default { title: 'CarouselCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CarouselCard} />;
}
