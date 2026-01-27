import { axe, render } from '@/test-utils';
import { ProgressCard } from './ProgressCard';
import attributes from './attributes.json';

describe('ProgressCard', () => {
  axe([<ProgressCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ProgressCard {...(attributes as any)} />);
  });
});
