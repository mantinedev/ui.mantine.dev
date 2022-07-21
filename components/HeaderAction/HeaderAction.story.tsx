import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderAction } from './HeaderAction';

storiesOf('HeaderAction', module).add('HeaderAction', () => (
  <StoryWrapper attributes={attributes} component={HeaderAction} />
));
