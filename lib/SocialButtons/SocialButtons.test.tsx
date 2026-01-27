import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { SocialButtons } from './SocialButtons';

describe('SocialButtons', () => {
  axe([<SocialButtons key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SocialButtons {...(attributes as any)} />);
  });
});
