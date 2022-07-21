import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { BadgeCard } from './BadgeCard';

storiesOf('BadgeCard', module).add('BadgeCard', () => (
  <StoryWrapper attributes={attributes} component={BadgeCard} />
));
