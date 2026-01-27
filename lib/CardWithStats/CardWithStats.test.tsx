import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { CardWithStats } from './CardWithStats';

describe('CardWithStats', () => {
  axe([<CardWithStats key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CardWithStats {...(attributes as any)} />);
  });
});
