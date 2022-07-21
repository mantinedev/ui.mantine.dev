import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { AuthenticationForm } from './AuthenticationForm';

storiesOf('AuthenticationForm', module).add('AuthenticationForm', () => (
  <StoryWrapper attributes={attributes} component={AuthenticationForm} />
));
