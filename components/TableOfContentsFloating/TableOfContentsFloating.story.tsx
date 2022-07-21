import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { TableOfContentsFloating } from './TableOfContentsFloating';

storiesOf('TableOfContentsFloating', module).add('TableOfContentsFloating', () => (
  <StoryWrapper attributes={attributes} component={TableOfContentsFloating} />
));
