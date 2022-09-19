import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { TaskCard } from './TaskCard';

storiesOf('TaskCard', module).add('TaskCard', () => (
  <StoryWrapper attributes={attributes} component={TaskCard} />
));
