import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { SplitButton } from './SplitButton';

storiesOf('SplitButton', module).add('SplitButton', () => (
  <StoryWrapper attributes={attributes} component={SplitButton} />
));
