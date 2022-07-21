import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { FaqWithImage } from './FaqWithImage';

storiesOf('FaqWithImage', module).add('FaqWithImage', () => (
  <StoryWrapper attributes={attributes} component={FaqWithImage} />
));
