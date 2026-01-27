import { axe, render } from '@/test-utils';
import { CommentHtml } from './CommentHtml';
import attributes from './attributes.json';

describe('CommentHtml', () => {
  axe([<CommentHtml key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<CommentHtml {...(attributes as any)} />);
  });
});
