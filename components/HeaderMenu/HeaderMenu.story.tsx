import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderMenu } from './HeaderMenu';

storiesOf('HeaderMenu', module).add('HeaderMenu', () => (
  <StoryWrapper attributes={attributes} component={HeaderMenu} />
));
