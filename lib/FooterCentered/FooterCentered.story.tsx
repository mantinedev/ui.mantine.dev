import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { FooterCentered } from './FooterCentered';

export default { title: 'FooterCentered' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FooterCentered} />;
}
