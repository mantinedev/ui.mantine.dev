import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { DropzoneButton } from './DropzoneButton';

storiesOf('DropzoneButton', module).add('DropzoneButton', () => (
  <StoryWrapper attributes={attributes} component={DropzoneButton} />
));
