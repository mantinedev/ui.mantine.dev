import { axe, render } from '@/test-utils';
import { ContainedInputs } from './ContainedInputs';
import attributes from './attributes.json';

describe('ContainedInputs', () => {
  axe([<ContainedInputs key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ContainedInputs {...(attributes as any)} />);
  });
});
