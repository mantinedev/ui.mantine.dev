import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { TableReviews } from './TableReviews';

export default { title: 'TableReviews' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={TableReviews} />;
}
