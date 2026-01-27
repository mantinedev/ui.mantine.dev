import { axe, render } from '@/test-utils';
import { CardWithStats } from './CardWithStats';
import attributes from './attributes.json';

describe('CardWithStats', () => {
  axe([<CardWithStats key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CardWithStats {...(attributes as any)} />);
  });
});
