import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import CartPages from './pages/CartPages';
import Product from './pages/Product';
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<CartPages />}></Route>
        <Route path='/product/:id' element={<Product />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
