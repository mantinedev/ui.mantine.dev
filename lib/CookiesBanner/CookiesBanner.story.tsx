import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { CookiesBanner } from './CookiesBanner';

storiesOf('CookiesBanner', module).add('CookiesBanner', () => (
  <StoryWrapper attributes={attributes} component={CookiesBanner} />
));
