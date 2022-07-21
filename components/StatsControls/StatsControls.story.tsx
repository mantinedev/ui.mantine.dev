import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { StatsControls } from './StatsControls';

storiesOf('StatsControls', module).add('StatsControls', () => (
  <StoryWrapper attributes={attributes} component={StatsControls} />
));
