import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { UserCardImage } from './UserCardImage';

describe('UserCardImage', () => {
  axe([<UserCardImage key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UserCardImage {...(attributes as any)} />);
  });
});
