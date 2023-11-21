import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FooterSimple } from './FooterSimple';

export default { title: 'FooterSimple' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FooterSimple} />;
}
