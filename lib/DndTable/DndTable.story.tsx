import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { DndTable } from './DndTable';

storiesOf('DndTable', module).add('DndTable', () => (
  <StoryWrapper attributes={attributes} component={DndTable} />
));
