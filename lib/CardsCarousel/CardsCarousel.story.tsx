import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { CardsCarousel } from './CardsCarousel';

export default { title: 'CardsCarousel' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CardsCarousel} />;
}
