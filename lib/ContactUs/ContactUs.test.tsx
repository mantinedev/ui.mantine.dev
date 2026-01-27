import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ContactUs } from './ContactUs';

describe('ContactUs', () => {
  axe([<ContactUs key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ContactUs {...(attributes as any)} />);
  });
});
