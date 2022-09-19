import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { GetInTouchSimple } from './GetInTouchSimple';

storiesOf('GetInTouchSimple', module).add('GetInTouchSimple', () => (
  <StoryWrapper attributes={attributes} component={GetInTouchSimple} />
));
