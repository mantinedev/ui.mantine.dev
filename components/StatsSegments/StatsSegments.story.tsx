import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { StatsSegments } from './StatsSegments';

storiesOf('StatsSegments', module).add('StatsSegments', () => (
  <StoryWrapper attributes={attributes} component={StatsSegments} />
));
