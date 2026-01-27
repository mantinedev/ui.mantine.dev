import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { GetInTouchSimple } from './GetInTouchSimple';

describe('GetInTouchSimple', () => {
  axe([<GetInTouchSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<GetInTouchSimple {...(attributes as any)} />);
  });
});
