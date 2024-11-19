import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { TableOfContentsFloating } from './TableOfContentsFloating';

export default { title: 'TableOfContentsFloating' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={TableOfContentsFloating} />;
}
