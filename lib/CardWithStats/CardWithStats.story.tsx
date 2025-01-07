import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { CardWithStats } from './CardWithStats';

export default { title: 'CardWithStats' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CardWithStats} />;
}
