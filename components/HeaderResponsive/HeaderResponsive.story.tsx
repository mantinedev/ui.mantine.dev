import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderResponsive } from './HeaderResponsive';

storiesOf('HeaderResponsive', module).add('HeaderResponsive', () => (
  <StoryWrapper attributes={attributes} component={HeaderResponsive} />
));
