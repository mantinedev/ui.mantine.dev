import { axe, render } from '@/test-utils';
import { ContactUs } from './ContactUs';
import attributes from './attributes.json';

describe('ContactUs', () => {
  axe([<ContactUs key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ContactUs {...(attributes as any)} />);
  });
});
