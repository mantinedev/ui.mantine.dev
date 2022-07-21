import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { QuantityInput } from './QuantityInput';

storiesOf('QuantityInput', module).add('QuantityInput', () => (
  <StoryWrapper attributes={attributes} component={QuantityInput} />
));
