import logo from './logo.svg';
import './App.css';
import Cbm from './jsx/Cbm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Showdaa from './jsx/Showdaa';

function App() {
  const store=createStore(Cbm);
  return (
    <Provider store={store}>
    <div className="App">
    <Showdaa />
    </div>
    </Provider>
  );
}

export default App;
