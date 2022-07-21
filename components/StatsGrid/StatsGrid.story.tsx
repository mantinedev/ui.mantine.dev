import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { StatsGrid } from './StatsGrid';

storiesOf('StatsGrid', module).add('StatsGrid', () => (
  <StoryWrapper attributes={attributes} component={StatsGrid} />
));
