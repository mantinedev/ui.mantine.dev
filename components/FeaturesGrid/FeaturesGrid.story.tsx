import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { FeaturesGrid } from './FeaturesGrid';

storiesOf('FeaturesGrid', module).add('FeaturesGrid', () => (
  <StoryWrapper attributes={attributes} component={FeaturesGrid} />
));
