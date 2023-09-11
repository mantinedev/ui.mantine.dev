import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { UserInfoAction } from './UserInfoAction';

storiesOf('UserInfoAction', module).add('UserInfoAction', () => (
  <StoryWrapper attributes={attributes} component={UserInfoAction} />
));
