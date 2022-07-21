import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { SliderHover } from './SliderHover';

storiesOf('SliderHover', module).add('SliderHover', () => (
  <StoryWrapper attributes={attributes} component={SliderHover} />
));
