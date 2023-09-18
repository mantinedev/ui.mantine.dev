import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ArticleCardFooter } from './ArticleCardFooter';

storiesOf('ArticleCardFooter', module).add('ArticleCardFooter', () => (
  <StoryWrapper attributes={attributes} component={ArticleCardFooter} />
));
