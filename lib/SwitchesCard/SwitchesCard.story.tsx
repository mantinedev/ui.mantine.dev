import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { SwitchesCard } from './SwitchesCard';

storiesOf('SwitchesCard', module).add('SwitchesCard', () => (
  <StoryWrapper attributes={attributes} component={SwitchesCard} />
));
