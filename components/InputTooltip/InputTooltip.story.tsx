import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { InputTooltip } from './InputTooltip';

storiesOf('InputTooltip', module).add('InputTooltip', () => (
  <StoryWrapper attributes={attributes} component={InputTooltip} />
));
