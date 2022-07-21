import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { CurrencyInput } from './CurrencyInput';

storiesOf('CurrencyInput', module).add('CurrencyInput', () => (
  <StoryWrapper attributes={attributes} component={CurrencyInput} />
));
