import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { AuthenticationImage } from './AuthenticationImage';

storiesOf('AuthenticationImage', module).add('AuthenticationImage', () => (
  <StoryWrapper attributes={attributes} component={AuthenticationImage} />
));
