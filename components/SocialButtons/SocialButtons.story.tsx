import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { SocialButtons } from './SocialButtons';

storiesOf('SocialButtons', module).add('SocialButtons', () => (
  <StoryWrapper attributes={attributes} component={SocialButtons} />
));
