import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { CommentHtml } from './CommentHtml';

describe('CommentHtml', () => {
  axe([<CommentHtml key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CommentHtml {...(attributes as any)} />);
  });
});
