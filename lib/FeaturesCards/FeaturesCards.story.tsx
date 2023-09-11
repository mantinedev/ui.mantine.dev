import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FeaturesCards } from './FeaturesCards';

storiesOf('FeaturesCards', module).add('FeaturesCards', () => (
  <StoryWrapper attributes={attributes} component={FeaturesCards} />
));
