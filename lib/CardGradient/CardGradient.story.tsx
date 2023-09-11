import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { CardGradient } from './CardGradient';

storiesOf('CardGradient', module).add('CardGradient', () => (
  <StoryWrapper attributes={attributes} component={CardGradient} />
));
