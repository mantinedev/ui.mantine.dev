import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { UserMenu } from './UserMenu';

storiesOf('UserMenu', module).add('UserMenu', () => (
  <StoryWrapper attributes={attributes} component={UserMenu} />
));
