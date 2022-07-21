import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { FooterSimple } from './FooterSimple';

storiesOf('FooterSimple', module).add('FooterSimple', () => (
  <StoryWrapper attributes={attributes} component={FooterSimple} />
));
