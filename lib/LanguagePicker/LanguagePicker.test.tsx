import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { LanguagePicker } from './LanguagePicker';

describe('LanguagePicker', () => {
  axe([<LanguagePicker key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<LanguagePicker {...(attributes as any)} />);
  });
});
