import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ProgressCard } from './ProgressCard';

storiesOf('ProgressCard', module).add('ProgressCard', () => (
  <StoryWrapper attributes={attributes} component={ProgressCard} />
));
