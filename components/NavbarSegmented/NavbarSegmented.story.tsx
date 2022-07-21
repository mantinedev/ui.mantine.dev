import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { NavbarSegmented } from './NavbarSegmented';

storiesOf('NavbarSegmented', module).add('NavbarSegmented', () => (
  <StoryWrapper attributes={attributes} component={NavbarSegmented} />
));
