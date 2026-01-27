import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { TaskCard } from './TaskCard';

describe('TaskCard', () => {
  axe([<TaskCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TaskCard {...(attributes as any)} />);
  });
});
