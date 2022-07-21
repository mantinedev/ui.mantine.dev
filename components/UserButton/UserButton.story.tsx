import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { UserButton } from './UserButton';

storiesOf('UserButton', module).add('UserButton', () => (
  <StoryWrapper attributes={attributes} component={UserButton} />
));
