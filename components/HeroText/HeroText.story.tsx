import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeroText } from './HeroText';

storiesOf('HeroText', module).add('HeroText', () => (
  <StoryWrapper attributes={attributes} component={HeroText} />
));
