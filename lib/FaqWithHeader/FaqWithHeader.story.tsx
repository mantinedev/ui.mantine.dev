import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { FaqWithHeader } from './FaqWithHeader';

export default { title: 'FaqWithHeader' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FaqWithHeader} />;
}
