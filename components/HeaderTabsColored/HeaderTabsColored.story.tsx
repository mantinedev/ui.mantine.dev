import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderTabsColored } from './HeaderTabsColored';

storiesOf('HeaderTabsColored', module).add('HeaderTabsColored', () => (
  <StoryWrapper attributes={attributes} component={HeaderTabsColored} />
));
