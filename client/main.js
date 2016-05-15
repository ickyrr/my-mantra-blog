import {createApp} from 'mantra-core';
import initContext from './configs/context';
import '/public/assets/css/mystyle.css';

// modules
import coreModule from './modules/core';
import aboutModule from './modules/about';
import contactModule from './modules/contact';
import accountsModule from './modules/accounts';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(aboutModule);
app.loadModule(contactModule);
app.loadModule(accountsModule);
app.init();
