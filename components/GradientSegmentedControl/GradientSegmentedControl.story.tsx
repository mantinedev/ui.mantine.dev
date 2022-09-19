import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { GradientSegmentedControl } from './GradientSegmentedControl';

storiesOf('GradientSegmentedControl', module).add('GradientSegmentedControl', () => (
  <StoryWrapper attributes={attributes} component={GradientSegmentedControl} />
));
