import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { SwitchToggle } from './SwitchToggle';

storiesOf('SwitchToggle', module).add('SwitchToggle', () => (
  <StoryWrapper attributes={attributes} component={SwitchToggle} />
));
