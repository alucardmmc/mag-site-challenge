import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Suscripcion from './pages/Suscripcion';
import Datos from './pages/Datos';
import Confirmacion from './pages/Confirmacion';

import { StoreContext } from './store/StoreProvider';

import './App.css';
import ProtectedRoute from './ProtectedRoute';
import { useContext } from 'react';

function App() {
  const [store, dispatch] = useContext(StoreContext);
  const { hasSubmitted } = store;

  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route path="/suscripcion">
              <Suscripcion />
            </Route>
            <Route path="/datos">
              <Datos />
            </Route>
            <ProtectedRoute
              path="/confirmacion"
              component={Confirmacion}
              hasSubmitted={hasSubmitted}
            />
            <Route path="/">
              <Redirect to="/suscripcion" />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
