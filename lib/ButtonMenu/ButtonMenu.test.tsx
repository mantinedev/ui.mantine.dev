import { axe, render } from '@/test-utils';
import { ButtonMenu } from './ButtonMenu';
import attributes from './attributes.json';

describe('ButtonMenu', () => {
  axe([<ButtonMenu key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ButtonMenu {...(attributes as any)} />);
  });
});
