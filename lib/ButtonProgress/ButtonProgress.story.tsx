import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ButtonProgress } from './ButtonProgress';

storiesOf('ButtonProgress', module).add('ButtonProgress', () => (
  <StoryWrapper attributes={attributes} component={ButtonProgress} />
));
