import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { TableOfContents } from './TableOfContents';

export default { title: 'TableOfContents' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={TableOfContents} />;
}
