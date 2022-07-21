import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ImageCard } from './ImageCard';

storiesOf('ImageCard', module).add('ImageCard', () => (
  <StoryWrapper attributes={attributes} component={ImageCard} />
));
