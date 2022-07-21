import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { SliderWhite } from './SliderWhite';

storiesOf('SliderWhite', module).add('SliderWhite', () => (
  <StoryWrapper attributes={attributes} component={SliderWhite} />
));
