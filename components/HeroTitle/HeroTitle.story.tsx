import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeroTitle } from './HeroTitle';

storiesOf('HeroTitle', module).add('HeroTitle', () => (
  <StoryWrapper attributes={attributes} component={HeroTitle} />
));
