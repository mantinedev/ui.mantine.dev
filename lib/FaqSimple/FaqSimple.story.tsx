import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FaqSimple } from './FaqSimple';

storiesOf('FaqSimple', module).add('FaqSimple', () => (
  <StoryWrapper attributes={attributes} component={FaqSimple} />
));
