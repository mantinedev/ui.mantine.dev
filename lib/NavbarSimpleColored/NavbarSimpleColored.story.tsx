import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { NavbarSimpleColored } from './NavbarSimpleColored';

storiesOf('NavbarSimpleColored', module).add('NavbarSimpleColored', () => (
  <StoryWrapper attributes={attributes} component={NavbarSimpleColored} />
));
