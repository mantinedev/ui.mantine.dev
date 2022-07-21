import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ButtonToggle } from './ButtonToggle';

storiesOf('ButtonToggle', module).add('ButtonToggle', () => (
  <StoryWrapper attributes={attributes} component={ButtonToggle} />
));
