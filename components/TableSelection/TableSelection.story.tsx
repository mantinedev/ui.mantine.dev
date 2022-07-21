import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { TableSelection } from './TableSelection';

storiesOf('TableSelection', module).add('TableSelection', () => (
  <StoryWrapper attributes={attributes} component={TableSelection} />
));
