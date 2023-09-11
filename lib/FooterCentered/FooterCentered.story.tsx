import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FooterCentered } from './FooterCentered';

storiesOf('FooterCentered', module).add('FooterCentered', () => (
  <StoryWrapper attributes={attributes} component={FooterCentered} />
));
