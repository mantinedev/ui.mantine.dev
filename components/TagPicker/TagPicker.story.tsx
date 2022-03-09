import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { TagPicker } from './TagPicker';

storiesOf('TagPicker', module).add('TagPicker', () => (
  <StoryWrapper attributes={attributes} component={TagPicker} />
));
