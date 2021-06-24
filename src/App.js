import { useContext, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import NavBar from './components/navbar/NavBar';

import { StoreContext } from './store/StoreProvider';

import './App.css';
import ProtectedRoute from './ProtectedRoute';

const Suscripcion = lazy(() => import('./pages/Suscripcion'));
const Datos = lazy(() => import('./pages/Datos'));
const Confirmacion = lazy(() => import('./pages/Confirmacion'));

function App() {
  const [store] = useContext(StoreContext);
  const { hasSubmitted } = store;

  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Suspense fallback={<div>Loading Page...</div>}>
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
            </Suspense>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
