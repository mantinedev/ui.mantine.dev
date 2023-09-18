import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { CarouselCard } from './CarouselCard';

storiesOf('CarouselCard', module).add('CarouselCard', () => (
  <StoryWrapper attributes={attributes} component={CarouselCard} />
));
