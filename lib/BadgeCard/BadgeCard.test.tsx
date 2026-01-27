import { axe, render } from '@/test-utils';
import { BadgeCard } from './BadgeCard';
import attributes from './attributes.json';

describe('BadgeCard', () => {
  axe([<BadgeCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<BadgeCard {...(attributes as any)} />);
  });
});
