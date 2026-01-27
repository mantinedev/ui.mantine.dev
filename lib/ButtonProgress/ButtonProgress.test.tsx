import { axe, render } from '@/test-utils';
import { ButtonProgress } from './ButtonProgress';
import attributes from './attributes.json';

describe('ButtonProgress', () => {
  axe([<ButtonProgress key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ButtonProgress {...(attributes as any)} />);
  });
});
