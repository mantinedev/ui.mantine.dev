import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { SliderInput } from './SliderInput';

storiesOf('SliderInput', module).add('SliderInput', () => (
  <StoryWrapper attributes={attributes} component={SliderInput} />
));
