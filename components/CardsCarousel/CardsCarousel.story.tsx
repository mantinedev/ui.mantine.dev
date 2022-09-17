import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { CardsCarousel } from './CardsCarousel';

storiesOf('CardsCarousel', module).add('CardsCarousel', () => (
  <StoryWrapper attributes={attributes} component={CardsCarousel} />
));
