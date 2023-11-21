import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FooterSocial } from './FooterSocial';

export default { title: 'FooterSocial' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FooterSocial} />;
}
