import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Suscripcion from './pages/Suscripcion';
import Datos from './pages/Datos';
import Confirmacion from './pages/Confirmacion';

import StoreProvider from './store/StoreProvider';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <StoreProvider>
          <main>
            <Switch>
              <Route path="/suscripcion">
                <Suscripcion />
              </Route>
              <Route path="/datos">
                <Datos />
              </Route>
              <Route path="/confirmacion">
                <Confirmacion />
              </Route>
              <Route path="/">
                <Redirect to="/suscripcion" />
              </Route>
            </Switch>
          </main>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
