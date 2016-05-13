import { configure } from '@kadira/storybook';
import { disable } from 'react-komposer';

disable();

function loadStories() {
  require('../client/modules/core/components/.stories');
  require('../client/modules/accounts/components/.stories');
}

configure(loadStories, module);
