import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { FooterLinks } from './FooterLinks';

storiesOf('FooterLinks', module).add('FooterLinks', () => (
  <StoryWrapper attributes={attributes} component={FooterLinks} />
));
