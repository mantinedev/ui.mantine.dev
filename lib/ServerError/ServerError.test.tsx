import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ServerError } from './ServerError';

describe('ServerError', () => {
  axe([<ServerError key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ServerError {...(attributes as any)} />);
  });
});
