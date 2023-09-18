import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { CustomSwitch } from './CustomSwitch';

storiesOf('CustomSwitch', module).add('CustomSwitch', () => (
  <StoryWrapper attributes={attributes} component={CustomSwitch} />
));
