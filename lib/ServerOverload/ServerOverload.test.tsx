import { axe, render } from '@/test-utils';
import { ServerOverload } from './ServerOverload';
import attributes from './attributes.json';

describe('ServerOverload', () => {
  axe([<ServerOverload key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ServerOverload {...(attributes as any)} />);
  });
});
