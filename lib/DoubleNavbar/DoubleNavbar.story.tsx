import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { DoubleNavbar } from './DoubleNavbar';

storiesOf('DoubleNavbar', module).add('DoubleNavbar', () => (
  <StoryWrapper attributes={attributes} component={DoubleNavbar} />
));
