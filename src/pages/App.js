import Home from '../containers/Home';
import About from '../containers/About';
import Challenge from '../containers/Challenge';

import '../styles/globalStyles.css'

const App = async () => {
  const App = document.createElement('div')

  App.classList.add('app')

  App.append(Home());
  App.append(About());
  App.append(await Challenge());

  return App
}

export default App
