import { axe, render } from '@/test-utils';
import { CardGradient } from './CardGradient';
import attributes from './attributes.json';

describe('CardGradient', () => {
  axe([<CardGradient key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CardGradient {...(attributes as any)} />);
  });
});
