import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { TableReviews } from './TableReviews';

storiesOf('TableReviews', module).add('TableReviews', () => (
  <StoryWrapper attributes={attributes} component={TableReviews} />
));
