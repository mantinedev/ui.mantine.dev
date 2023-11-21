import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { HeaderMegaMenu } from './HeaderMegaMenu';

export default { title: 'HeaderMegaMenu' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeaderMegaMenu} />;
}
