import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { TableOfContents } from './TableOfContents';

storiesOf('TableOfContents', module).add('TableOfContents', () => (
  <StoryWrapper attributes={attributes} component={TableOfContents} />
));
