import { axe, render } from '@/test-utils';
import { SocialButtons } from './SocialButtons';
import attributes from './attributes.json';

describe('SocialButtons', () => {
  axe([<SocialButtons key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SocialButtons {...(attributes as any)} />);
  });
});
