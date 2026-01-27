import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ButtonCopy } from './ButtonCopy';

describe('ButtonCopy', () => {
  axe([<ButtonCopy key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ButtonCopy {...(attributes as any)} />);
  });
});
