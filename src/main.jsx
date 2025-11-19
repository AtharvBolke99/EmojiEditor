import { createRoot } from 'react-dom/client'
import "./index.css";
import { Routes,Route,BrowserRouter } from 'react-router';
import Home from './Home';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
  </BrowserRouter>
)