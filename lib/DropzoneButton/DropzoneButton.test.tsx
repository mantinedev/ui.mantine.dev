import { axe, render } from '@/test-utils';
import { DropzoneButton } from './DropzoneButton';
import attributes from './attributes.json';

describe('DropzoneButton', () => {
  axe([<DropzoneButton key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<DropzoneButton {...(attributes as any)} />);
  });
});
