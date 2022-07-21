import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ContactUs } from './ContactUs';

storiesOf('ContactUs', module).add('ContactUs', () => (
  <StoryWrapper attributes={attributes} component={ContactUs} />
));
