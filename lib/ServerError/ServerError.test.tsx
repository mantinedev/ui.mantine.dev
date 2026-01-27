import { axe, render } from '@/test-utils';
import { ServerError } from './ServerError';
import attributes from './attributes.json';

describe('ServerError', () => {
  axe([<ServerError key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ServerError {...(attributes as any)} />);
  });
});
