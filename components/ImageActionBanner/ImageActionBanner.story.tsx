import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ImageActionBanner } from './ImageActionBanner';

storiesOf('ImageActionBanner', module).add('ImageActionBanner', () => (
  <StoryWrapper attributes={attributes} component={ImageActionBanner} />
));
