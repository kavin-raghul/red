import './App.css';
import { Provider } from 'react-redux';
import Showdaa from './jsx/Showdaa';
import store from './jsx/store';

function App() {
 
  return (
    <Provider store={store}>
    <div className="App">
    <Showdaa />
    </div>
    </Provider>
  );
}

export default App;
