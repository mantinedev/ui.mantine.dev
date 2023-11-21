import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { Subgrid } from './Subgrid';

export default { title: 'Subgrid' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={Subgrid} />;
}
