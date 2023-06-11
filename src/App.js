import { Outlet } from 'react-router-dom';
import './App.css';
import Hero from './components/hero';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default App;
