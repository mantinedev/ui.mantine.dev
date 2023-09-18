import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ForgotPasswordInput } from './ForgotPasswordInput';

storiesOf('ForgotPasswordInput', module).add('ForgotPasswordInput', () => (
  <StoryWrapper attributes={attributes} component={ForgotPasswordInput} />
));
