import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { NotFoundTitle } from './NotFoundTitle';

storiesOf('NotFoundTitle', module).add('NotFoundTitle', () => (
  <StoryWrapper attributes={attributes} component={NotFoundTitle} />
));
