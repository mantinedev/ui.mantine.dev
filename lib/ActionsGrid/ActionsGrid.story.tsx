import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ActionsGrid } from './ActionsGrid';

storiesOf('ActionsGrid', module).add('ActionsGrid', () => (
  <StoryWrapper attributes={attributes} component={ActionsGrid} />
));
