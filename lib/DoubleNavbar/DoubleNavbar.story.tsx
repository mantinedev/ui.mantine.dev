import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { DoubleNavbar } from './DoubleNavbar';

export default { title: 'DoubleNavbar' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={DoubleNavbar} />;
}
