import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import './index.css';
import Container from './mycomponents/dashboard';
import Favorite from './mycomponents/favorite';
import Profile from './mycomponents/profile';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Container/>}>
        </Route>
        <Route exact path="/favorite" element={<Favorite/>}>
        </Route>
        <Route exact path="/profile" element={<Profile/>}>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;