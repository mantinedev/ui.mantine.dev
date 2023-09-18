import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { StatsGridIcons } from './StatsGridIcons';

storiesOf('StatsGridIcons', module).add('StatsGridIcons', () => (
  <StoryWrapper attributes={attributes} component={StatsGridIcons} />
));
