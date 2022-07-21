import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { FeaturesTitle } from './FeaturesTitle';

storiesOf('FeaturesTitle', module).add('FeaturesTitle', () => (
  <StoryWrapper attributes={attributes} component={FeaturesTitle} />
));
