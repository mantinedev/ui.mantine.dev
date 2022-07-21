import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { NavbarLinksGroup } from './NavbarLinksGroup';

storiesOf('NavbarLinksGroup', module).add('NavbarLinksGroup', () => (
  <StoryWrapper attributes={attributes} component={NavbarLinksGroup} />
));
