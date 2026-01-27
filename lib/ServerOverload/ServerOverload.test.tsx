import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ServerOverload } from './ServerOverload';

describe('ServerOverload', () => {
  axe([<ServerOverload key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ServerOverload {...(attributes as any)} />);
  });
});
