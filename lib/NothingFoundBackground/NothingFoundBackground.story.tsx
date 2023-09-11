import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { NothingFoundBackground } from './NothingFoundBackground';

storiesOf('NothingFoundBackground', module).add('NothingFoundBackground', () => (
  <StoryWrapper attributes={attributes} component={NothingFoundBackground} />
));
