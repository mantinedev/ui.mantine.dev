import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ContactIcons } from './ContactIcons';

storiesOf('ContactIcons', module).add('ContactIcons', () => (
  <StoryWrapper attributes={attributes} component={ContactIcons} />
));
