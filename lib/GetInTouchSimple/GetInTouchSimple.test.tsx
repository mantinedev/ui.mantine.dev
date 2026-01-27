import { axe, render } from '@/test-utils';
import { GetInTouchSimple } from './GetInTouchSimple';
import attributes from './attributes.json';

describe('GetInTouchSimple', () => {
  axe([<GetInTouchSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<GetInTouchSimple {...(attributes as any)} />);
  });
});
