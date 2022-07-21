import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { SliderMarks } from './SliderMarks';

storiesOf('SliderMarks', module).add('SliderMarks', () => (
  <StoryWrapper attributes={attributes} component={SliderMarks} />
));
