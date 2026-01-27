import { axe, render } from '@/test-utils';
import { ImageCard } from './ImageCard';
import attributes from './attributes.json';

describe('ImageCard', () => {
  axe([<ImageCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ImageCard {...(attributes as any)} />);
  });
});
