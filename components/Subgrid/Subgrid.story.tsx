import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { Subgrid } from './Subgrid';

storiesOf('Subgrid', module).add('Subgrid', () => (
  <StoryWrapper attributes={attributes} component={Subgrid} />
));
