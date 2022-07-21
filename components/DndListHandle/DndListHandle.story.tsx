import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { DndListHandle } from './DndListHandle';

storiesOf('DndListHandle', module).add('DndListHandle', () => (
  <StoryWrapper attributes={attributes} component={DndListHandle} />
));
