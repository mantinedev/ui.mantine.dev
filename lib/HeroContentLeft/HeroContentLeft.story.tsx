import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { HeroContentLeft } from './HeroContentLeft';

storiesOf('HeroContentLeft', module).add('HeroContentLeft', () => (
  <StoryWrapper attributes={attributes} component={HeroContentLeft} />
));
