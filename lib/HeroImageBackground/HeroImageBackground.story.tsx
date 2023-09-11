import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { HeroImageBackground } from './HeroImageBackground';

storiesOf('HeroImageBackground', module).add('HeroImageBackground', () => (
  <StoryWrapper attributes={attributes} component={HeroImageBackground} />
));
