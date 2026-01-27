import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { CommentSimple } from './CommentSimple';

describe('CommentSimple', () => {
  axe([<CommentSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CommentSimple {...(attributes as any)} />);
  });
});
