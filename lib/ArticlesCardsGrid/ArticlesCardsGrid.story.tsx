import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticlesCardsGrid } from './ArticlesCardsGrid';

storiesOf('ArticlesCardsGrid', module).add('ArticlesCardsGrid', () => (
  <StoryWrapper attributes={attributes} component={ArticlesCardsGrid} />
));
