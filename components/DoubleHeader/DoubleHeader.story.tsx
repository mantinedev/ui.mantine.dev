import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { DoubleHeader } from './DoubleHeader';

storiesOf('DoubleHeader', module).add('DoubleHeader', () => (
  <StoryWrapper attributes={attributes} component={DoubleHeader} />
));
