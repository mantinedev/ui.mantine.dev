import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { FeaturesImages } from './FeaturesImages';

storiesOf('FeaturesImages', module).add('FeaturesImages', () => (
  <StoryWrapper attributes={attributes} component={FeaturesImages} />
));
