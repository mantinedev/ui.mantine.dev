import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { CurrencyInput } from './CurrencyInput';

describe('CurrencyInput', () => {
  axe([<CurrencyInput key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CurrencyInput {...(attributes as any)} />);
  });
});
