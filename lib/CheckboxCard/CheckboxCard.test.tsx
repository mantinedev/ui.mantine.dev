import { axe, render } from '@/test-utils';
import { CheckboxCard } from './CheckboxCard';
import attributes from './attributes.json';

describe('CheckboxCard', () => {
  axe([<CheckboxCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CheckboxCard {...(attributes as any)} />);
  });
});
