import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticleCardVertical } from './ArticleCardVertical';

storiesOf('ArticleCardVertical', module).add('ArticleCardVertical', () => (
  <StoryWrapper attributes={attributes} component={ArticleCardVertical} />
));
