import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderMenuColored } from './HeaderMenuColored';

storiesOf('HeaderMenuColored', module).add('HeaderMenuColored', () => (
  <StoryWrapper attributes={attributes} component={HeaderMenuColored} />
));
