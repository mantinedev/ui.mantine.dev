import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { AuthenticationTitle } from './AuthenticationTitle';

storiesOf('AuthenticationTitle', module).add('AuthenticationTitle', () => (
  <StoryWrapper attributes={attributes} component={AuthenticationTitle} />
));
