import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { NavbarSimple } from './NavbarSimple';

storiesOf('NavbarSimple', module).add('NavbarSimple', () => (
  <StoryWrapper attributes={attributes} component={NavbarSimple} />
));
