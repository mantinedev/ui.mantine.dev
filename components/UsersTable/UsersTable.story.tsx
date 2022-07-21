import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { UsersTable } from './UsersTable';

storiesOf('UsersTable', module).add('UsersTable', () => (
  <StoryWrapper attributes={attributes} component={UsersTable} />
));
