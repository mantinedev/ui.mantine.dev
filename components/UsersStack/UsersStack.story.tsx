import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { UsersStack } from './UsersStack';

storiesOf('UsersStack', module).add('UsersStack', () => (
  <StoryWrapper attributes={attributes} component={UsersStack} />
));
