import { axe, render } from '@/test-utils';
import { UserCardImage } from './UserCardImage';
import attributes from './attributes.json';

describe('UserCardImage', () => {
  axe([<UserCardImage key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UserCardImage {...(attributes as any)} />);
  });
});
