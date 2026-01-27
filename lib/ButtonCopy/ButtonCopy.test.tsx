import { axe, render } from '@/test-utils';
import { ButtonCopy } from './ButtonCopy';
import attributes from './attributes.json';

describe('ButtonCopy', () => {
  axe([<ButtonCopy key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ButtonCopy {...(attributes as any)} />);
  });
});
