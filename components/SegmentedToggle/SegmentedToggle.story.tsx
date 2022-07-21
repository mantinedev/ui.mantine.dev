import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { SegmentedToggle } from './SegmentedToggle';

storiesOf('SegmentedToggle', module).add('SegmentedToggle', () => (
  <StoryWrapper attributes={attributes} component={SegmentedToggle} />
));
