import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderSimple } from './HeaderSimple';

storiesOf('HeaderSimple', module).add('HeaderSimple', () => (
  <StoryWrapper attributes={attributes} component={HeaderSimple} />
));
