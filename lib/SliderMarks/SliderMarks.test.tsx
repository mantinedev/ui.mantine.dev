import { axe, render } from '@/test-utils';
import { SliderMarks } from './SliderMarks';
import attributes from './attributes.json';

describe('SliderMarks', () => {
  axe([<SliderMarks key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderMarks {...(attributes as any)} />);
  });
});
