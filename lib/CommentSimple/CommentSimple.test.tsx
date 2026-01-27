import { axe, render } from '@/test-utils';
import { CommentSimple } from './CommentSimple';
import attributes from './attributes.json';

describe('CommentSimple', () => {
  axe([<CommentSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CommentSimple {...(attributes as any)} />);
  });
});
