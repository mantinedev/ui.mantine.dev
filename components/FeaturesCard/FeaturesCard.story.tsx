import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { FeaturesCard } from './FeaturesCard';

storiesOf('FeaturesCard', module).add('FeaturesCard', () => (
  <StoryWrapper attributes={attributes} component={FeaturesCard} />
));
