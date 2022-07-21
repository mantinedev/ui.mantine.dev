import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { StatsRing } from './StatsRing';

storiesOf('StatsRing', module).add('StatsRing', () => (
  <StoryWrapper attributes={attributes} component={StatsRing} />
));
