import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { FooterSocial } from './FooterSocial';

storiesOf('FooterSocial', module).add('FooterSocial', () => (
  <StoryWrapper attributes={attributes} component={FooterSocial} />
));
