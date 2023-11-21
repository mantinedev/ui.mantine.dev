import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FaqWithHeader } from './FaqWithHeader';

export default { title: 'FaqWithHeader' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FaqWithHeader} />;
}
