import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { SliderLabel } from './SliderLabel';

storiesOf('SliderLabel', module).add('SliderLabel', () => (
  <StoryWrapper attributes={attributes} component={SliderLabel} />
));
