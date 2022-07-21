import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ArticleCard } from './ArticleCard';

storiesOf('ArticleCard', module).add('ArticleCard', () => (
  <StoryWrapper attributes={attributes} component={ArticleCard} />
));
