import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { CheckboxCard } from './CheckboxCard';

describe('CheckboxCard', () => {
  axe([<CheckboxCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CheckboxCard {...(attributes as any)} />);
  });
});
