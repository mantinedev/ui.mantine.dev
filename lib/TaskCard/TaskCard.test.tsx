import { axe, render } from '@/test-utils';
import { TaskCard } from './TaskCard';
import attributes from './attributes.json';

describe('TaskCard', () => {
  axe([<TaskCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TaskCard {...(attributes as any)} />);
  });
});
