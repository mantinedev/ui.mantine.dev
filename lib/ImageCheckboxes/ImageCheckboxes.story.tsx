import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ImageCheckboxes } from './ImageCheckboxes';

storiesOf('ImageCheckbox', module).add('ImageCheckbox', () => (
  <StoryWrapper attributes={attributes} component={ImageCheckboxes} />
));
