import { axe, render } from '@/test-utils';
import { ProgressCardColored } from './ProgressCardColored';
import attributes from './attributes.json';

describe('ProgressCardColored', () => {
  axe([<ProgressCardColored key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ProgressCardColored {...(attributes as any)} />);
  });
});
