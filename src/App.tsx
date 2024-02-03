import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import CartPages from './pages/CartPage/CartPages';
import Product from './pages/ProductPage/Product';
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/you-meal/" element={<Home />}></Route>
        <Route path="/you-meal/cart" element={<CartPages />}></Route>
        <Route path='/you-meal/product/:id' element={<Product />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
