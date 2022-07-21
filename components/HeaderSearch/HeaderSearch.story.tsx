import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderSearch } from './HeaderSearch';

storiesOf('HeaderSearch', module).add('HeaderSearch', () => (
  <StoryWrapper attributes={attributes} component={HeaderSearch} />
));
