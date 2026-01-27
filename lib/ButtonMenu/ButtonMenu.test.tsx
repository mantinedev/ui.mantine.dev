import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ButtonMenu } from './ButtonMenu';

describe('ButtonMenu', () => {
  axe([<ButtonMenu key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ButtonMenu {...(attributes as any)} />);
  });
});
