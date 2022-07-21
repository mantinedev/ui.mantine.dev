import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { FaqWithHeader } from './FaqWithHeader';

storiesOf('FaqWithHeader', module).add('FaqWithHeader', () => (
  <StoryWrapper attributes={attributes} component={FaqWithHeader} />
));
