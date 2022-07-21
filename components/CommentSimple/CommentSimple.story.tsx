import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { CommentSimple } from './CommentSimple';

storiesOf('CommentSimple', module).add('CommentSimple', () => (
  <StoryWrapper attributes={attributes} component={CommentSimple} />
));
