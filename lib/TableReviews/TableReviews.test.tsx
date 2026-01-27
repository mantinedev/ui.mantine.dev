import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { TableReviews } from './TableReviews';

describe('TableReviews', () => {
  axe([<TableReviews key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<TableReviews {...(attributes as any)} />);
  });
});
