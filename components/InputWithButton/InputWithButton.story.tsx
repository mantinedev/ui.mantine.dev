import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { InputWithButton } from './InputWithButton';

storiesOf('InputWithButton', module).add('InputWithButton', () => (
  <StoryWrapper attributes={attributes} component={InputWithButton} />
));
