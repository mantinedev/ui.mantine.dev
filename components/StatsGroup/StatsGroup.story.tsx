import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { StatsGroup } from './StatsGroup';

storiesOf('StatsGroup', module).add('StatsGroup', () => (
  <StoryWrapper attributes={attributes} component={StatsGroup} />
));
