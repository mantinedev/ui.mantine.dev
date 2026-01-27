import { axe, render } from '@/test-utils';
import { SwitchesCard } from './SwitchesCard';
import attributes from './attributes.json';

describe('SwitchesCard', () => {
  axe([<SwitchesCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SwitchesCard {...(attributes as any)} />);
  });
});
