import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ImageCard } from './ImageCard';

describe('ImageCard', () => {
  axe([<ImageCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ImageCard {...(attributes as any)} />);
  });
});
