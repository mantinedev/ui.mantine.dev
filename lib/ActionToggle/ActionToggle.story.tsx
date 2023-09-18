import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ActionToggle } from './ActionToggle';

storiesOf('ActionToggle', module).add('ActionToggle', () => (
  <StoryWrapper attributes={attributes} component={ActionToggle} />
));
