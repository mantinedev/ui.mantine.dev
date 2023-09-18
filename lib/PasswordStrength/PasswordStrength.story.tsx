import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { PasswordStrength } from './PasswordStrength';

storiesOf('PasswordStrength', module).add('PasswordStrength', () => (
  <StoryWrapper attributes={attributes} component={PasswordStrength} />
));
