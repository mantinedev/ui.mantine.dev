import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { InputValidation } from './InputValidation';

storiesOf('InputValidation', module).add('InputValidation', () => (
  <StoryWrapper attributes={attributes} component={InputValidation} />
));
