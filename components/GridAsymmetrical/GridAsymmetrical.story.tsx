import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { GridAsymmetrical } from './GridAsymmetrical';

storiesOf('GridAsymmetrical', module).add('GridAsymmetrical', () => (
  <StoryWrapper attributes={attributes} component={GridAsymmetrical} />
));
