import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { GetInTouch } from './GetInTouch';

describe('GetInTouch', () => {
  axe([<GetInTouch key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<GetInTouch {...(attributes as any)} />);
  });
});
