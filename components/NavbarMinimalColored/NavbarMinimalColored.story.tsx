import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { NavbarMinimalColored } from './NavbarMinimalColored';

storiesOf('NavbarMinimalColored', module).add('NavbarMinimalColored', () => (
  <StoryWrapper attributes={attributes} component={NavbarMinimalColored} />
));
