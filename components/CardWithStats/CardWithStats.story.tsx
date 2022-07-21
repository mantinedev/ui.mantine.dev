import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { CardWithStats } from './CardWithStats';

storiesOf('CardWithStats', module).add('CardWithStats', () => (
  <StoryWrapper attributes={attributes} component={CardWithStats} />
));
