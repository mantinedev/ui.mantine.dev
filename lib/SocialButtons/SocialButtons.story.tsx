import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { SocialButtons } from './SocialButtons';

storiesOf('SocialButtons', module).add('SocialButtons', () => (
  <StoryWrapper attributes={attributes} component={SocialButtons} />
));
