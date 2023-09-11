import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ButtonCopy } from './ButtonCopy';

storiesOf('ButtonCopy', module).add('ButtonCopy', () => (
  <StoryWrapper attributes={attributes} component={ButtonCopy} />
));
