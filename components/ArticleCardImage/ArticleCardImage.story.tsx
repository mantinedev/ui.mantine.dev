import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ArticleCardImage } from './ArticleCardImage';

storiesOf('ArticleCardImage', module).add('ArticleCardImage', () => (
  <StoryWrapper attributes={attributes} component={ArticleCardImage} />
));
