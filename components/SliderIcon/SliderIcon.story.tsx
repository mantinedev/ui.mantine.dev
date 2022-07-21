import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { SliderIcon } from './SliderIcon';

storiesOf('SliderIcon', module).add('SliderIcon', () => (
  <StoryWrapper attributes={attributes} component={SliderIcon} />
));
