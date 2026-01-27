import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ProgressCard } from './ProgressCard';

describe('ProgressCard', () => {
  axe([<ProgressCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ProgressCard {...(attributes as any)} />);
  });
});
