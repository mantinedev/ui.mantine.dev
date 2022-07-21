import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { GetInTouch } from './GetInTouch';

storiesOf('GetInTouch', module).add('GetInTouch', () => (
  <StoryWrapper attributes={attributes} component={GetInTouch} />
));
