import { axe, render } from '@/test-utils';
import { LanguagePicker } from './LanguagePicker';
import attributes from './attributes.json';

describe('LanguagePicker', () => {
  axe([<LanguagePicker key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<LanguagePicker {...(attributes as any)} />);
  });
});
