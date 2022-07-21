import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { NavbarSearch } from './NavbarSearch';

storiesOf('NavbarSearch', module).add('NavbarSearch', () => (
  <StoryWrapper attributes={attributes} component={NavbarSearch} />
));
