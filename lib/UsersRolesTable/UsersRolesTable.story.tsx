import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { UsersRolesTable } from './UsersRolesTable';

export default { title: 'UsersRolesTable' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={UsersRolesTable} />;
}
