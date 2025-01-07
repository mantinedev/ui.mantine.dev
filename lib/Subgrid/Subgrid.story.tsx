import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { Subgrid } from './Subgrid';

export default { title: 'Subgrid' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={Subgrid} />;
}
