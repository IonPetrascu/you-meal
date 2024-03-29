
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

const rootElem = document.getElementById('root');

if (rootElem) {
  ReactDOM.createRoot(rootElem).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
