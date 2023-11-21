import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { UsersTable } from './UsersTable';

export default { title: 'UsersTable' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={UsersTable} />;
}
