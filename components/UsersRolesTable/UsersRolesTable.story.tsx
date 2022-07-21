import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { UsersRolesTable } from './UsersRolesTable';

storiesOf('UsersRolesTable', module).add('UsersRolesTable', () => (
  <StoryWrapper attributes={attributes} component={UsersRolesTable} />
));
