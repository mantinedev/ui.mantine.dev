import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { EmailBanner } from './EmailBanner';

storiesOf('EmailBanner', module).add('EmailBanner', () => (
  <StoryWrapper attributes={attributes} component={EmailBanner} />
));
