import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ForgotPassword } from './ForgotPassword';

storiesOf('ForgotPassword', module).add('ForgotPassword', () => (
  <StoryWrapper attributes={attributes} component={ForgotPassword} />
));
