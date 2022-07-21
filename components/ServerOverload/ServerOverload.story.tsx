import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ServerOverload } from './ServerOverload';

storiesOf('ServerOverload', module).add('ServerOverload', () => (
  <StoryWrapper attributes={attributes} component={ServerOverload} />
));
