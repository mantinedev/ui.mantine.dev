import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FloatingLabelInput } from './FloatingLabelInput';

storiesOf('FloatingLabelInput', module).add('FloatingLabelInput', () => (
  <StoryWrapper attributes={attributes} component={FloatingLabelInput} />
));
