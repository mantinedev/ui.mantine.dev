import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { CommentSimple } from './CommentSimple';

storiesOf('CommentSimple', module).add('CommentSimple', () => (
  <StoryWrapper attributes={attributes} component={CommentSimple} />
));
