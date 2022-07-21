import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { DndList } from './DndList';

storiesOf('DndList', module).add('DndList', () => (
  <StoryWrapper attributes={attributes} component={DndList} />
));
