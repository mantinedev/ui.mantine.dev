import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeroBullets } from './HeroBullets';

storiesOf('HeroBullets', module).add('HeroBullets', () => (
  <StoryWrapper attributes={attributes} component={HeroBullets} />
));
