import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ButtonsGroup } from './ButtonsGroup';

storiesOf('ButtonsGroup', module).add('ButtonsGroup', () => (
  <StoryWrapper attributes={attributes} component={ButtonsGroup} />
));
