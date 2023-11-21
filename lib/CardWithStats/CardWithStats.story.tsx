import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { CardWithStats } from './CardWithStats';

export default { title: 'CardWithStats' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CardWithStats} />;
}
