import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { UserCardImage } from './UserCardImage';

storiesOf('UserCardImage', module).add('UserCardImage', () => (
  <StoryWrapper attributes={attributes} component={UserCardImage} />
));
