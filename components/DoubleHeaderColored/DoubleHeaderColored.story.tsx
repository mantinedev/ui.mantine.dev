import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { DoubleHeaderColored } from './DoubleHeaderColored';

storiesOf('DoubleHeaderColored', module).add('DoubleHeaderColored', () => (
  <StoryWrapper attributes={attributes} component={DoubleHeaderColored} />
));
