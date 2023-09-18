import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { NavbarMinimal } from './NavbarMinimal';

storiesOf('NavbarMinimal', module).add('NavbarMinimal', () => (
  <StoryWrapper attributes={attributes} component={NavbarMinimal} />
));
