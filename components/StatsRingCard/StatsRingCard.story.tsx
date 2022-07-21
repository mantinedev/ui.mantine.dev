import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { StatsRingCard } from './StatsRingCard';

storiesOf('StatsRingCard', module).add('StatsRingCard', () => (
  <StoryWrapper attributes={attributes} component={StatsRingCard} />
));
