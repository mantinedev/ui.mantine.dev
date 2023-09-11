import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { HeroImageRight } from './HeroImageRight';

storiesOf('HeroImageRight', module).add('HeroImageRight', () => (
  <StoryWrapper attributes={attributes} component={HeroImageRight} />
));
