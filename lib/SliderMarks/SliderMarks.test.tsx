import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { SliderMarks } from './SliderMarks';

describe('SliderMarks', () => {
  axe([<SliderMarks key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderMarks {...(attributes as any)} />);
  });
});
