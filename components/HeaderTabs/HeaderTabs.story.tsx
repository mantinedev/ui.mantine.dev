import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderTabs } from './HeaderTabs';

storiesOf('HeaderTabs', module).add('HeaderTabs', () => (
  <StoryWrapper attributes={attributes} component={HeaderTabs} />
));
