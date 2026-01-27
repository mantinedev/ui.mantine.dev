import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { SwitchesCard } from './SwitchesCard';

describe('SwitchesCard', () => {
  axe([<SwitchesCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SwitchesCard {...(attributes as any)} />);
  });
});
