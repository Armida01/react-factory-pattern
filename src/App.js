import { Routes, Route } from 'react-router-dom';

// Components
import {
  Layouts
} from './components';

// Pages
import { Login, Register, Prices } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/prices" element={<Prices />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
