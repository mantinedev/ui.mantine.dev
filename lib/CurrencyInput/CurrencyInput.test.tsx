import { axe, render } from '@/test-utils';
import { CurrencyInput } from './CurrencyInput';
import attributes from './attributes.json';

describe('CurrencyInput', () => {
  axe([<CurrencyInput key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CurrencyInput {...(attributes as any)} />);
  });
});
