import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { CustomSwitch } from './CustomSwitch';

export default { title: 'CustomSwitch' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CustomSwitch} />;
}
