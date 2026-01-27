import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { DropzoneButton } from './DropzoneButton';

describe('DropzoneButton', () => {
  axe([<DropzoneButton key="1" {...(attributes as any)} />], {
    rules: {
      label: {
        enabled: false,
      },
    },
  });

  it('renders correctly', () => {
    render(<DropzoneButton {...(attributes as any)} />);
  });
});
