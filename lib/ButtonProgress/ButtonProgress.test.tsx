import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ButtonProgress } from './ButtonProgress';

describe('ButtonProgress', () => {
  axe([<ButtonProgress key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ButtonProgress {...(attributes as any)} />);
  });
});
