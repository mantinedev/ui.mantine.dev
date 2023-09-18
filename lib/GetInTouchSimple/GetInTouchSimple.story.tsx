import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { GetInTouchSimple } from './GetInTouchSimple';

storiesOf('GetInTouchSimple', module).add('GetInTouchSimple', () => (
  <StoryWrapper attributes={attributes} component={GetInTouchSimple} />
));
