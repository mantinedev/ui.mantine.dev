import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ContainedInputs } from './ContainedInputs';

describe('ContainedInputs', () => {
  axe([<ContainedInputs key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ContainedInputs {...(attributes as any)} />);
  });
});
