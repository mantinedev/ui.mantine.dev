import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { TableSort } from './TableSort';

storiesOf('TableSort', module).add('TableSort', () => (
  <StoryWrapper attributes={attributes} component={TableSort} />
));
