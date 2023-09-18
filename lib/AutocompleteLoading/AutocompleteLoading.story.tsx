import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { AutocompleteLoading } from './AutocompleteLoading';

storiesOf('AutocompleteLoading', module).add('AutocompleteLoading', () => (
  <StoryWrapper attributes={attributes} component={AutocompleteLoading} />
));
