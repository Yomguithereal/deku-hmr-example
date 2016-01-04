import {dom, element} from 'deku';
import Application from './components/Application.jsx';
import configureStore from './configureStore';

// Getting store
const store = configureStore();

// Creating renderer
const render = dom.createRenderer(document.getElementById('mount'), store.dispatch);

// Rendering function
let cached = null;
function renderApplication(Component) {
  if (!Component)
    Component = cached;
  else
    cached = Component;

  render(<Component />, store.getState());
}

// First render
renderApplication(Application);

// Rendering on store update
store.subscribe(() => renderApplication());

// Hooking into HMR
if (module.hot) {
  module.hot.accept('./components/Application.jsx', function() {
    const nextApplication = require('./components/Application.jsx').default;
    renderApplication(nextApplication);
  });
}

module.exports = store;
