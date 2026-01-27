import { axe, render } from '@/test-utils';
import { GetInTouch } from './GetInTouch';
import attributes from './attributes.json';

describe('GetInTouch', () => {
  axe([<GetInTouch key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<GetInTouch {...(attributes as any)} />);
  });
});
