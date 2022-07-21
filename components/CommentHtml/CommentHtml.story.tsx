import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { CommentHtml } from './CommentHtml';

storiesOf('CommentHtml', module).add('CommentHtml', () => (
  <StoryWrapper attributes={attributes} component={CommentHtml} />
));
