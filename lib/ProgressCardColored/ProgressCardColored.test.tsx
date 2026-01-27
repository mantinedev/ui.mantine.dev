import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ProgressCardColored } from './ProgressCardColored';

describe('ProgressCardColored', () => {
  axe([<ProgressCardColored key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ProgressCardColored {...(attributes as any)} />);
  });
});
