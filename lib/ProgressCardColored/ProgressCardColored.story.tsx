import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ProgressCardColored } from './ProgressCardColored';

storiesOf('ProgressCardColored', module).add('ProgressCardColored', () => (
  <StoryWrapper attributes={attributes} component={ProgressCardColored} />
));
