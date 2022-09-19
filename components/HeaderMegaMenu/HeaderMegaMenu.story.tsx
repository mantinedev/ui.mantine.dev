import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderMegaMenu } from './HeaderMegaMenu';

storiesOf('HeaderMegaMenu', module).add('HeaderMegaMenu', () => (
  <StoryWrapper attributes={attributes} component={HeaderMegaMenu} />
));
