import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { InlineEditableText } from './InlineEditableText';

storiesOf('InlineTextInput', module).add('InlineTextInput', () => (
  <StoryWrapper attributes={attributes} component={InlineEditableText} />
));
