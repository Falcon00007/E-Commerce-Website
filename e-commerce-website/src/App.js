import './App.css';
import ListItems from './components/ListItems';
import { AppContext } from './context/AppContext';
//import CartProvider from './context/ContextProvider';


function App() {
  return (
    <>
    <AppContext>
    <ListItems/>
    </AppContext>
    </>
  );
}

export default App;
