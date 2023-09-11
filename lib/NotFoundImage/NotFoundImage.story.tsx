import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { NotFoundImage } from './NotFoundImage';

storiesOf('NotFoundImage', module).add('NotFoundImage', () => (
  <StoryWrapper attributes={attributes} component={NotFoundImage} />
));
