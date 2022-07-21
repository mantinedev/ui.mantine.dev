import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { LanguagePicker } from './LanguagePicker';

storiesOf('LanguagePicker', module).add('LanguagePicker', () => (
  <StoryWrapper attributes={attributes} component={LanguagePicker} />
));
