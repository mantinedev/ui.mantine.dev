import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { UserInfoIcons } from './UserInfoIcons';

storiesOf('UserInfoIcons', module).add('UserInfoIcons', () => (
  <StoryWrapper attributes={attributes} component={UserInfoIcons} />
));
