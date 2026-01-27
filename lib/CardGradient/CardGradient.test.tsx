import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { CardGradient } from './CardGradient';

describe('CardGradient', () => {
  axe([<CardGradient key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CardGradient {...(attributes as any)} />);
  });
});
