import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { TableScrollArea } from './TableScrollArea';

storiesOf('TableScrollArea', module).add('TableScrollArea', () => (
  <StoryWrapper attributes={attributes} component={TableScrollArea} />
));
