import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { StatsCard } from './StatsCard';

storiesOf('StatsCard', module).add('StatsCard', () => (
  <StoryWrapper attributes={attributes} component={StatsCard} />
));
