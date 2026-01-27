import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { BadgeCard } from './BadgeCard';

describe('BadgeCard', () => {
  axe([<BadgeCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<BadgeCard {...(attributes as any)} />);
  });
});
