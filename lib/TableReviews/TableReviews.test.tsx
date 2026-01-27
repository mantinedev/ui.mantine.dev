import { axe, render } from '@/test-utils';
import { TableReviews } from './TableReviews';
import attributes from './attributes.json';

describe('TableReviews', () => {
  axe([<TableReviews key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableReviews {...(attributes as any)} />);
  });
});
