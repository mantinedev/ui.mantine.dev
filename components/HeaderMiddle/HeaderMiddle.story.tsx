import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderMiddle } from './HeaderMiddle';

storiesOf('HeaderMiddle', module).add('HeaderMiddle', () => (
  <StoryWrapper attributes={attributes} component={HeaderMiddle} />
));
